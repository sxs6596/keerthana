import prisma from "@/lib/prisma";
import { authenticateUser } from "@/lib/auth";

export async function GET(req) {
  try {
    // Authenticate the user by verifying the JWT token
    const { userId } = authenticateUser(req);

    // Retrieve user details from the database
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { id: true, email: true, name: true, role: true },
    });

    if (!user) {
      return new Response(JSON.stringify({ error: "User not found" }), { status: 404 });
    }

    return new Response(JSON.stringify({ user }), { status: 200, headers: { "Content-Type": "application/json" } });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
  }
}
