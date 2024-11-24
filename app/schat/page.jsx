// 'use client';

// import React, { useState, useEffect, useRef } from 'react';
// import { useSocket } from '@/context/SocketProvider';

// const ChatInterface = () => {
//     const [message, setMessage] = useState('');
//     const [messages, setMessages] = useState([]); // Store chat messages
//     const { socket, sendMessage } = useSocket(); // Access socket and sendMessage function
//     const messagesEndRef = useRef(null);

//     // Scroll to the bottom when a new message is added
//     const scrollToBottom = () => {
//         messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
//     };

//     // Listen for incoming messages from the server
//     useEffect(() => {
//         if (socket) {
//             socket.on('event:message', (data) => {
//                 setMessages((prevMessages) => [...prevMessages, data.message]); // Add to message list
//                 scrollToBottom();
//             });
//         }

//         return () => {
//             if (socket) {
//                 socket.off('event:message'); // Clean up listener
//             }
//         };
//     }, [socket]);

//     // Handle sending a message
//     const handleSendMessage = () => {
//         if (message.trim()) {
//             sendMessage(message); // Emit the message to the server
//             setMessages((prevMessages) => [...prevMessages, message]); // Add to local state
//             setMessage(''); // Clear the input field
//         }
//     };

//     return (
//         <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-gray-200">
//             <div className="w-full max-w-lg p-4 bg-gray-800 rounded-lg shadow-lg">
//                 <h2 className="text-2xl font-bold mb-4 text-center text-white">Real-Time Chat</h2>
//                 <div className="overflow-y-auto max-h-80 bg-gray-700 p-4 rounded-lg mb-4">
//                     {messages.length > 0 ? (
//                         messages.map((msg, index) => (
//                             <div
//                                 key={index}
//                                 className={`mb-2 p-2 rounded ${
//                                     index % 2 === 0
//                                         ? 'bg-blue-500 text-white'
//                                         : 'bg-gray-500 text-white'
//                                 }`}
//                             >
//                                 {msg}
//                             </div>
//                         ))
//                     ) : (
//                         <p className="text-gray-400 text-center">No messages yet...</p>
//                     )}
//                     <div ref={messagesEndRef}></div>
//                 </div>
//                 <div className="flex items-center gap-2">
//                     <input
//                         type="text"
//                         className="flex-grow p-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
//                         placeholder="Type your message..."
//                         value={message}
//                         onChange={(e) => setMessage(e.target.value)} // Update state
//                     />
//                     <button
//                         className="px-4 py-2 bg-blue-500 rounded-lg text-white font-bold hover:bg-blue-600 transition-all"
//                         onClick={handleSendMessage} // Send message on click
//                     >
//                         Send
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ChatInterface;
'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useSocket } from '@/context/SocketProvider';

const ChatInterface = () => {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]); // Store chat messages
    const { socket, sendMessage } = useSocket();
    const messagesEndRef = useRef(null);

    // Scroll to the bottom when a new message is added
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    // Listen for incoming messages
    useEffect(() => {
        if (socket) {
            socket.on('event:message', (data) => {
                setMessages((prevMessages) => [...prevMessages, data]); // Add message with metadata
                scrollToBottom();
            });
        }

        return () => {
            if (socket) {
                socket.off('event:message'); // Clean up listener
            }
        };
    }, [socket]);

    const handleSendMessage = () => {
        if (message.trim()) {
            sendMessage(message); // Emit the message to the server
            setMessage(''); // Clear the input field
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-gray-200">
            <div className="w-full max-w-lg p-4 bg-gray-800 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-4 text-center text-white">Real-Time Chat</h2>
                <div className="overflow-y-auto max-h-80 bg-gray-700 p-4 rounded-lg mb-4">
                    {messages.length > 0 ? (
                        messages.map((msg, index) => (
                            <div
                                key={index}
                                className={`mb-2 p-2 rounded-lg text-white ${
                                    msg.senderId === socket.id
                                        ? 'bg-blue-500 self-end' // Sent by current user
                                        : 'bg-gray-500 self-start' // Received from others
                                }`}
                            >
                                {msg.message}
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-400 text-center">No messages yet...</p>
                    )}
                    <div ref={messagesEndRef}></div>
                </div>
                <div className="flex items-center gap-2">
                    <input
                        type="text"
                        className="flex-grow p-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Type your message..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                    <button
                        className="px-4 py-2 bg-blue-500 rounded-lg text-white font-bold hover:bg-blue-600 transition-all"
                        onClick={handleSendMessage}
                    >
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ChatInterface;

