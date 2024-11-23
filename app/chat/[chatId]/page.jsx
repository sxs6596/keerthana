import ChatWindow from "@/components/ChatWindow";

export default function ChatRoomPage({ params }) {
  const { chatId } = params;
  const userId = 1; // Replace this with user ID from authentication (e.g., NextAuth)

  return (
    <div>
      <h1>Chat Room</h1>
      <ChatWindow chatId={parseInt(chatId, 10)} senderId={userId} />
    </div>
  );
}
