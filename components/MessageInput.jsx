'use client';

import { useState } from 'react';

const MessageInput = ({ socket }) => {
  const [message, setMessage] = useState('');

  const sendMessage = () => {
    if (socket && socket.readyState === WebSocket.OPEN && message.trim()) {
      const data = { user: 'User1', text: message }; // Example user
      socket.send(JSON.stringify(data));
      setMessage(''); // Clear input
    }
  };

  return (
    <div style={{ marginTop: '10px', display: 'flex' }}>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message..."
        style={{ flex: 1, padding: '10px' }}
      />
      <button onClick={sendMessage} style={{ marginLeft: '10px', padding: '10px 20px' }}>
        Send
      </button>
    </div>
  );
};

export default MessageInput;
