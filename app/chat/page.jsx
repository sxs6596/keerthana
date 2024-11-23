import ChatList from "@/components/ChatList";

export default function ChatPage() {
  const userId = 1; // Replace this with user ID from authentication (e.g., NextAuth)

  return (
    <div>
      <h1>Chats</h1>
      <ChatList userId={userId} />
    </div>
  );
}
