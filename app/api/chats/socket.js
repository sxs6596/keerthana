import { WebSocketServer } from 'ws';

let clients = []; // To store connected WebSocket clients

export default function handler(req, res) {
  if (res.socket.server.wss) {
    console.log('WebSocket server is already running');
  } else {
    console.log('Initializing WebSocket server...');
    const wss = new WebSocketServer({ noServer: true });
    res.socket.server.wss = wss;

    wss.on('connection', (socket) => {
      clients.push(socket);

      console.log('New WebSocket connection established');

      socket.on('message', (message) => {
        console.log('Message received:', message);
        // Broadcast to all clients
        clients.forEach((client) => {
          if (client.readyState === 1) {
            client.send(message);
          }
        });
      });

      socket.on('close', () => {
        console.log('WebSocket connection closed');
        clients = clients.filter((client) => client !== socket);
      });
    });

    res.socket.server.on('upgrade', (req, socket, head) => {
      wss.handleUpgrade(req, socket, head, (ws) => {
        wss.emit('connection', ws, req);
      });
    });

    console.log('WebSocket server initialized');
  }
  res.status(200).end();
}
