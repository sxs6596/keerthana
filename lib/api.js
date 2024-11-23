import axios from "axios";

export const fetchChats = async (userId) => {
  const response = await axios.get(`/api/chats`, {
    headers: { "user-id": userId },
  });
  return response.data.chats;
};

export const fetchMessages = async (chatId) => {
  const response = await axios.get(`/api/messages`, {
    headers: { "chat-id": chatId },
  });
  return response.data.messages;
};

export const createChat = async (participantIds) => {
  const response = await axios.post(`/api/chats`, { participantIds });
  return response.data.chat;
};
