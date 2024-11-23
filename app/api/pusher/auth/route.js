import Pusher from "pusher";

const pusher = new Pusher({
  appId: process.env.PUSHER_APP_ID,
  key: process.env.NEXT_PUBLIC_PUSHER_KEY,
  secret: process.env.PUSHER_SECRET,
  cluster: process.env.NEXT_PUBLIC_PUSHER_CLUSTER,
  useTLS: true,
});

export async function POST(req) {
  const { message, username } = await req.json();

  // Trigger a Pusher event
  await pusher.trigger("chat", "message", { message, username });

  return new Response(JSON.stringify({ status: "Message sent" }), {
    status: 200,
  });
}
