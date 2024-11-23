import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    // Fetch statistics for all theses
    const statistics = await prisma.statistics.findMany({
      include: {
        thesis: {
          select: {
            title: true,
          },
        },
      },
    });

    const data = statistics.map((stat) => ({
      thesisId: stat.thesisId,
      title: stat.thesis.title,
      views: stat.views,
      downloads: stat.downloads,
    }));

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error("Error fetching statistics:", error);
    return NextResponse.json(
      { error: "Failed to fetch statistics. Please try again later." },
      { status: 500 }
    );
  }
}
