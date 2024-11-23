import prisma from "@/lib/prisma"; // Import the Prisma client

export async function POST(req, res) {
  const body = await req.json();
  const { participants } = body;

  if (!participants || participants.length < 2) {
    return res.status(400).json({ error: "At least two participants are required." });
  }

  const chat = await prisma.chat.create({
    data: {
      participants: {
        connect: participants.map((id) => ({ id })),
      },
    },
    include: { participants: true },
  });

  return res.json(chat);
}
