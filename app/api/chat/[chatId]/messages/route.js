import prisma from "@/prisma/client";

export async function GET(req, res) {
  const { chatId } = req.query;

  const messages = await prisma.message.findMany({
    where: { chatId: Number(chatId) },
    include: { sender: true },
    orderBy: { createdAt: "asc" },
  });

  return res.json(messages);
}

export async function POST(req, res) {
    const { chatId } = req.query;
    const body = await req.json();
    const { senderId, content } = body;
  
    if (!senderId || !content) {
      return res.status(400).json({ error: "Sender ID and content are required." });
    }
  
    const message = await prisma.message.create({
      data: {
        senderId,
        chatId: Number(chatId),
        content,
      },
    });
  
    return res.json(message);
  }