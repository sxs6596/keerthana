// app/api/chats/route.js
import prisma from "@/prisma/client";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const userId = searchParams.get("userId");

  if (!userId) {
    return new Response(JSON.stringify([]), { status: 200 }); // Return an empty array if userId is missing
  }

  try {
    const chats = await prisma.chat.findMany({
      where: {
        participants: {
          some: { id: parseInt(userId, 10) }, // Find chats where the user is a participant
        },
      },
      include: {
        participants: true,
        messages: {
          orderBy: { createdAt: "asc" }, // Fetch messages in chronological order
        },
      },
    });

    return new Response(JSON.stringify(chats), { status: 200 });
  } catch (error) {
    console.error("Error fetching chats:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch chats" }), { status: 500 });
  }
}
