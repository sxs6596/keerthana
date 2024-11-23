'use client';

import ChatWindow from '../../components/ChatWindow';
import { useState, useEffect } from 'react';
import MessageInput from '../../components/MessageInput';

const ChatPage = () => {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    // Establish WebSocket connection
    const ws = new WebSocket('ws://localhost:3000/api/chats/socket');
    setSocket(ws);

    return () => {
      ws.close();
    };
  }, []);

  return (
    <div>
      <h1>Chat</h1>
      <ChatWindow />
      <MessageInput socket={socket} />
    </div>
  );
};

export default ChatPage;
