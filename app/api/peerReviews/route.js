import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const reviews = await prisma.peerReview.findMany({
      include: {
        reviewer: { select: { name: true } },
        thesis: { select: { title: true } },
      },
      orderBy: { reviewedAt: "desc" },
    });

    return NextResponse.json({ reviews }, { status: 200 });
  } catch (error) {
    console.error("Error fetching reviews:", error);
    return NextResponse.json(
      { error: "Failed to fetch reviews." },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  try {
    const { thesisId, comments, rating } = await req.json();

    if (!thesisId || !comments || !rating) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    // Create a new peer review
    const review = await prisma.peerReview.create({
      data: {
        thesisId: parseInt(thesisId, 10),
        comments,
        rating: parseInt(rating, 10),
        reviewerId: 1, // Replace with the current user's ID
      },
    });

    return NextResponse.json(
      { message: "Review submitted successfully.", review },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error submitting review:", error);
    return NextResponse.json(
      { error: "Failed to submit review." },
      { status: 500 }
    );
  }
}
