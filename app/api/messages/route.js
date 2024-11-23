// app/api/messages/route.js
import prisma from "@/prisma/client";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const chatId = searchParams.get("chatId"); // Extract chatId from query params

    if (!chatId) {
      return new Response(JSON.stringify({ error: "chatId is required" }), { status: 400 });
    }

    const messages = await prisma.message.findMany({
      where: {
        chatId: parseInt(chatId, 10), // Ensure chatId is passed as an integer
      },
      orderBy: {
        createdAt: "asc", // Sort messages by creation time
      },
      include: {
        sender: true, // Include sender details
      },
    });

    return new Response(JSON.stringify(messages), { status: 200 });
  } catch (error) {
    console.error("Error fetching messages:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch messages" }), { status: 500 });
  }
}
