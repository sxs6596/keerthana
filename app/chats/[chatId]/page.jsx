import ChatWindow from "@/components/ChatWindow";

const ChatPage = ({ params }) => {
  const chatId = params.id; // Extract chat ID from route

  return (
    <div>
      <ChatWindow chatId={chatId} userId={1} /> {/* Replace with actual user ID */}
    </div>
  );
};

export default ChatPage;
