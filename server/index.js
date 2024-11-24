// const http = require('http');
// const SocketService = require('./services/socket');

// async function init() {
//     const httpServer = http.createServer();

//     const socketService = new SocketService(httpServer); // Pass the httpServer to the constructor

//     const PORT = process.env.PORT || 8000;

//     httpServer.listen(PORT, () => {
//         console.log(`Server is running on port ${PORT}`);
//     });

//     socketService.initListeners(); // Initialize the listeners
// }

// init();
const http = require('http');
const { Server } = require('socket.io');

// Create HTTP server
const server = http.createServer();

// Attach Socket.IO to the server
const io = new Server(server, {
    cors: {
        origin: 'http://localhost:3000', // Replace with your frontend's URL
        methods: ['GET', 'POST'],
    },
});

// // Listen for incoming connections
// io.on('connection', (socket) => {
//     console.log(`New user connected: ${socket.id}`);

//     // Listen for messages from a client
//     socket.on('event:message', (data) => {
//         console.log(`Message received from ${socket.id}: ${data.message}`);
        
//         // Broadcast the message to all connected clients
//         io.emit('event:message', { message: data.message });
//     });

//     // Handle disconnection
//     socket.on('disconnect', () => {
//         console.log(`User disconnected: ${socket.id}`);
//     });
// });
io.on('connection', (socket) => {
    console.log(`New user connected: ${socket.id}`);

    // Listen for messages from a client
    socket.on('event:message', (data) => {
        console.log(`Message received from ${socket.id}: ${data.message}`);
        
        // Include sender's socket ID and broadcast the message
        io.emit('event:message', { message: data.message, senderId: socket.id });
    });

    socket.on('disconnect', () => {
        console.log(`User disconnected: ${socket.id}`);
    });
});

// Start the server
const PORT = 8000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
