'use client';

import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { io } from 'socket.io-client';

const SocketContext = createContext();

export const useSocket = () => {
    const context = useContext(SocketContext);
    if (!context) {
        throw new Error('useSocket must be used within a SocketProvider');
    }
    return context;
};

export const SocketProvider = ({ children }) => {
    const [socket, setSocket] = useState(null);

    useEffect(() => {
        const socketInstance = io('http://localhost:8000'); // Update to your backend URL
        setSocket(socketInstance);

        socketInstance.on('connect', () => {
            console.log('Connected to server');
        });

        return () => {
            socketInstance.disconnect();
        };
    }, []);

    // const sendMessage = (message) => {
    //     if (socket) {
    //         socket.emit('event:message', { message });
    //     } else {
    //         console.error('Socket not connected');
    //     }
    // };

    const sendMessage = useCallback((message)=>{
        if(socket){
            socket.emit('event:message',{message});
        }
        else{
            console.error('Socket not connected');
        }
    },[socket])

    return (
        <SocketContext.Provider value={{ socket, sendMessage }}>
            {children}
        </SocketContext.Provider>
    );
};
