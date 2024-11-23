"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function ChatList({ userId }) {
  const [chats, setChats] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchChats() {
      try {
        const res = await fetch(`/api/chats?userId=${userId}`);
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }

        const data = await res.json(); // Parse JSON response
        setChats(data || []); // Ensure `data` is an array
      } catch (err) {
        console.error("Error fetching chats:", err);
        setError("Failed to load chats");
      }
    }

    fetchChats();
  }, [userId]);

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h2>Your Chats</h2>
      {chats.map((chat) => (
        <div key={chat.id}>
          Chat with:{" "}
          {chat.participants.map((p) => p.name).join(", ")}
        </div>
      ))}
    </div>
  );
}
