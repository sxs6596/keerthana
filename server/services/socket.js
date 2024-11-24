// const { Server } = require('socket.io');

// class SocketService {
//     constructor(httpServer) {
//         console.log('Initializing the socket service');
//         this._io = new Server(httpServer, {
//             cors: {
//                 allowedHeaders: ['*'], // Allow the Authorization header
//                 origin: '*', // Allow all origins (replace with a specific URL in production)
//             },
//         });
        
//     }

//     initListeners(){

//        const io = this._io;
//        console.log('initializing socket listeners'); 

//        io.on('Connection',(socket)=>{
//               console.log(`New Socket Connected ${socket.id}`); 

//               socket.on('event:message',async({message})=>{
//                 console.log(`new message recieved`);


//               })
//        })

//     }

//     get io() {
//         return this._io; // Return the instance of Socket.IO
//     }
// }

// module.exports = SocketService;
const { Server } = require('socket.io');
class SocketService {
    constructor(httpServer) {
        console.log('Initializing the socket service');
        this._io = new Server(httpServer, {
            cors: {
                allowedHeaders: ['*'], // Allow the Authorization header
                origin: '*', // Allow all origins (replace with a specific URL in production)
            },
        });
    }

    initListeners() {
        const io = this._io;
        console.log('Initializing socket listeners'); 

        // Fix the event name to 'connection' (lowercase)
        io.on('connection', (socket) => {
            console.log(`New Socket Connected: ${socket.id}`); 

            socket.on('event:message', async ({ message }) => {
                console.log(`New message received: ${message}`);
            });
        });
    }

    get io() {
        return this._io; // Return the instance of Socket.IO
    }
}

module.exports = SocketService;

