import { NextResponse } from "next/server";
import prisma from "@/lib/prisma"; // Ensure this points to your Prisma client

export async function POST(req) {
  try {
    // Parse the search filters from the request body
    const { title, author, year, keywords } = await req.json();

    // Build the where clause for Prisma based on provided filters
    const filters = {};

    if (title) {
      filters.title = {
        contains: title, // Partial match
        mode: "insensitive", // Case insensitive
      };
    }

    if (author) {
      filters.author = {
        name: {
          contains: author,
          mode: "insensitive",
        },
      };
    }

    if (year) {
      filters.year = parseInt(year, 10);
    }

    if (keywords) {
      filters.keywords = {
        some: {
          name: {
            contains: keywords,
            mode: "insensitive",
          },
        },
      };
    }

    // Fetch theses matching the filters
    const theses = await prisma.thesis.findMany({
      where: filters,
      include: {
        author: true, // Include author details
        keywords: true, // Include keywords
        topics: true, // Include topics if necessary
      },
    });

    // Respond with the search results
    return NextResponse.json(theses, { status: 200 });
  } catch (error) {
    console.error("Error handling search request:", error);
    return NextResponse.json(
      { error: "Failed to fetch search results. Please try again." },
      { status: 500 }
    );
  }
}
