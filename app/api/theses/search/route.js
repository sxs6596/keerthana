// import { NextResponse } from "next/server";
// import prisma from "@/lib/prisma"; // Ensure this points to your Prisma client

// export async function POST(req) {
//   try {
//     // Parse the search filters from the request body
//     const { title, author, year, keywords } = await req.json();

//     // Build the where clause for Prisma based on provided filters
//     const filters = {};

//     if (title) {
//       filters.title = {
//         contains: title, // Partial match
//         mode: "insensitive", // Case insensitive
//       };
//     }

//     if (author) {
//       filters.author = {
//         name: {
//           contains: author,
//           mode: "insensitive",
//         },
//       };
//     }

//     if (year) {
//       filters.year = parseInt(year, 10);
//     }

//     if (keywords) {
//       filters.keywords = {
//         some: {
//           name: {
//             contains: keywords,
//             mode: "insensitive",
//           },
//         },
//       };
//     }

//     // Fetch theses matching the filters
//     const theses = await prisma.thesis.findMany({
//       where: filters,
//       include: {
//         author: true, // Include author details
//         keywords: true, // Include keywords
//         topics: true, // Include topics if necessary
//       },
//     });

//     // Respond with the search results
//     return NextResponse.json(theses, { status: 200 });
//   } catch (error) {
//     console.error("Error handling search request:", error);
//     return NextResponse.json(
//       { error: "Failed to fetch search results. Please try again." },
//       { status: 500 }
//     );
//   }
// }
// import { NextResponse } from "next/server";
// import prisma from "@/lib/prisma"; // Ensure this points to your Prisma client

// export async function POST(req) {
//   try {
//     // Parse the search filters from the request body
//     const { title, author, year, keywords } = await req.json();

//     // Initialize the filters object
//     const filters = {};

//     // Filter by title (partial match, case insensitive)
//     if (title && title.trim()) {
//       filters.title = {
//         contains: title.trim(), // Partial match
//         mode: "insensitive", // Case insensitive
//       };
//     }

//     // Filter by year (exact match)
//     if (year) {
//       const parsedYear = parseInt(year, 10);
//       if (!isNaN(parsedYear)) {
//         filters.year = parsedYear;
//       }
//     }

//     // Filter by author (partial match, case insensitive)
//     if (author && author.trim()) {
//       filters.author = {
//         is: {
//           name: {
//             contains: author.trim(), // Partial match
//           },
//         },
//       };
//     }

//     // Filter by keywords (match any of the provided keywords)
//     if (keywords && keywords.trim()) {
//       const keywordArray = keywords
//         .split(",")
//         .map((kw) => kw.trim())
//         .filter((kw) => kw.length > 0); // Remove empty strings

//       if (keywordArray.length > 0) {
//         filters.keywords = {
//           some: {
//             name: {
//               in: keywordArray, // Match any keyword
//             },
//           },
//         };
//       }
//     }

//     // Fetch theses matching the filters
//     const theses = await prisma.thesis.findMany({
//       where: filters,
//       include: {
//         author: true, // Include author details
//         keywords: true, // Include keywords
//       },
//     });

//     // Check if results are found
//     if (!theses || theses.length === 0) {
//       return NextResponse.json(
//         { message: "No results found for the given search criteria." },
//         { status: 200 }
//       );
//     }

//     // Respond with the search results
//     return NextResponse.json(theses, { status: 200 });
//   } catch (error) {
//     console.error("Error handling search request:", error);
//     return NextResponse.json(
//       { error: "Failed to fetch search results. Please try again." },
//       { status: 500 }
//     );
//   }
// }

// import { NextResponse } from "next/server";
// import prisma from "@/lib/prisma"; // Ensure this points to your Prisma client

// export async function POST(req) {
//   try {
//     // Parse the search filters from the request body
//     const { title, author, year, keywords } = await req.json();

//     // Initialize the filters object
//     const filters = {};

//     // Filter by title (partial match, case insensitive)
//     if (title && title.trim()) {
//       filters.title = {
//         contains: title.trim(), // Partial match
//         mode: "insensitive", // Supported at the root level
//       };
//     }

//     // Filter by year (exact match)
//     if (year) {
//       const parsedYear = parseInt(year, 10);
//       if (!isNaN(parsedYear)) {
//         filters.year = parsedYear;
//       }
//     }

//     // Filter by author (partial match)
//     if (author && author.trim()) {
//       filters.author = {
//         is: {
//           name: {
//             contains: author.trim(), // Partial match
//             // Removed `mode` as it's not supported in nested fields
//           },
//         },
//       };
//     }

//     // Filter by keywords (match any of the provided keywords)
//     if (keywords && keywords.trim()) {
//       const keywordArray = keywords
//         .split(",")
//         .map((kw) => kw.trim())
//         .filter((kw) => kw.length > 0); // Remove empty strings

//       if (keywordArray.length > 0) {
//         filters.keywords = {
//           some: {
//             name: {
//               in: keywordArray, // Match any keyword
//               // Removed `mode` as it's not supported in nested fields
//             },
//           },
//         };
//       }
//     }

//     // Fetch theses matching the filters
//     const theses = await prisma.thesis.findMany({
//       where: filters,
//       include: {
//         author: true, // Include author details
//         keywords: true, // Include keywords
//         topics: true, // Include topics (if applicable)
//       },
//     });

//     // Check if results are found
//     if (!theses || theses.length === 0) {
//       return NextResponse.json(
//         { message: "No results found for the given search criteria." },
//         { status: 200 }
//       );
//     }

//     // Respond with the search results
//     return NextResponse.json(theses, { status: 200 });
//   } catch (error) {
//     console.error("Error handling search request:", error);
//     return NextResponse.json(
//       { error: "Failed to fetch search results. Please try again." },
//       { status: 500 }
//     );
//   }
// }
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma"; // Ensure this points to your Prisma client

export async function POST(req) {
  try {
    // Parse the search filters from the request body
    const { title, author, year, keywords } = await req.json();

    // Initialize the filters object
    const filters = {};

    // Filter by title (partial match, case insensitive by default in Prisma v5+)
    if (title && title.trim()) {
      filters.title = {
        contains: title.trim(), // Partial match
      };
    }

    // Filter by year (exact match)
    if (year) {
      const parsedYear = parseInt(year, 10);
      if (!isNaN(parsedYear)) {
        filters.year = parsedYear;
      }
    }

    // Filter by author (partial match)
    if (author && author.trim()) {
      filters.author = {
        is: {
          name: {
            contains: author.trim(), // Partial match
          },
        },
      };
    }

    // Filter by keywords (match any of the provided keywords)
    if (keywords && keywords.trim()) {
      const keywordArray = keywords
        .split(",")
        .map((kw) => kw.trim())
        .filter((kw) => kw.length > 0); // Remove empty strings

      if (keywordArray.length > 0) {
        filters.keywords = {
          some: {
            name: {
              in: keywordArray, // Match any keyword
            },
          },
        };
      }
    }

    // Fetch theses matching the filters
    const theses = await prisma.thesis.findMany({
      where: filters,
      include: {
        author: true, // Include author details
        keywords: true, // Include keywords
        topics: true, // Include topics (if applicable)
      },
    });

    // Check if results are found
    if (!theses || theses.length === 0) {
      return NextResponse.json(
        { message: "No results found for the given search criteria." },
        { status: 200 }
      );
    }

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
