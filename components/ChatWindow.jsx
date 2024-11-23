"use client";
import { useState, useEffect } from "react";
import socket from "@/lib/socket";

export default function ChatWindow({ chatId, senderId }) {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    async function fetchMessages() {
      try {
        const res = await fetch(`/api/messages?chatId=${chatId}`); // Ensure chatId is passed
        if (!res.ok) {
          throw new Error("Failed to fetch messages");
        }
        const data = await res.json();
        setMessages(data || []);
      } catch (err) {
        console.error("Error fetching messages:", err);
      }
    }

    fetchMessages();

    socket.on("receive-message", (msg) => {
      if (msg.chatId === chatId) {
        setMessages((prev) => [...prev, msg]);
      }
    });

    return () => {
      socket.off("receive-message");
    };
  }, [chatId]);

  const sendMessage = async () => {
    const message = { chatId, senderId, content: newMessage };

    try {
      const res = await fetch("/api/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(message),
      });

      if (!res.ok) {
        throw new Error("Failed to send message");
      }

      const savedMessage = await res.json();

      socket.emit("send-message", savedMessage);
      setMessages((prev) => [...prev, savedMessage]);
      setNewMessage("");
    } catch (err) {
      console.error("Error sending message:", err);
    }
  };

  return (
    <div>
      <div>
        {messages.map((msg) => (
          <p key={msg.id}>
            <strong>{msg.sender.name}: </strong>
            {msg.content}
          </p>
        ))}
      </div>
      <input
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        placeholder="Type a message..."
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}
