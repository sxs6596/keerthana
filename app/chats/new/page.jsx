"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createChat } from "@/lib/api";

const NewChatPage = () => {
  const [participants, setParticipants] = useState("");
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleCreateChat = async () => {
    try {
      const participantIds = participants
        .split(",")
        .map((id) => parseInt(id.trim()));

      if (participantIds.length < 2) {
        setError("You must include at least two participants.");
        return;
      }

      const chat = await createChat(participantIds);
      router.push(`/chats/${chat.id}`);
    } catch (err) {
      console.error("Failed to create chat:", err);
      setError("Failed to create chat. Please try again.");
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Start a New Chat</h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <div className="mb-4">
        <label htmlFor="participants" className="block mb-2">
          Enter Participant IDs (comma-separated):
        </label>
        <input
          id="participants"
          type="text"
          value={participants}
          onChange={(e) => setParticipants(e.target.value)}
          className="border p-2 rounded w-full"
          placeholder="e.g., 1, 2"
        />
      </div>
      <button
        onClick={handleCreateChat}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Create Chat
      </button>
    </div>
  );
};

export default NewChatPage;
