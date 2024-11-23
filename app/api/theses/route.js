// import { NextResponse } from "next/server";
// import prisma from "@/lib/prisma";
// import { promises as fs } from "fs";
// import path from "path";

// // Directory where files will be stored
// const UPLOADS_DIR = path.join(process.cwd(), "public", "uploads");

// // Ensure the uploads directory exists
// async function ensureUploadsDir() {
//   try {
//     await fs.access(UPLOADS_DIR);
//   } catch (error) {
//     console.log("Uploads directory not found. Creating it...");
//     await fs.mkdir(UPLOADS_DIR, { recursive: true });
//   }
// }

// export async function POST(req) {
//   try {
//     // Ensure the uploads directory exists
//     await ensureUploadsDir();

//     // Parse the form data
//     const formData = await req.formData();
//     const title = formData.get("title");
//     const abstract = formData.get("abstract");
//     const authorId = formData.get("authorId");
//     const year = parseInt(formData.get("year"), 10);
//     const file = formData.get("file");

//     // Validate form data
//     if (!title || !abstract || !authorId || !year || !file) {
//       console.error("Validation error: Missing required fields.");
//       return NextResponse.json(
//         { error: "All fields are required." },
//         { status: 400 }
//       );
//     }

//     // Save the uploaded file to the folder
//     const fileName = `${Date.now()}-${file.name}`;
//     const filePath = path.join(UPLOADS_DIR, fileName);

//     try {
//       console.log("Saving file to:", filePath);
//       await fs.writeFile(filePath, Buffer.from(await file.arrayBuffer()));
//       console.log("File saved successfully:", filePath);
//     } catch (fileError) {
//       console.error("Error saving the file:", fileError);
//       return NextResponse.json(
//         { error: "Failed to save the uploaded file. Please try again." },
//         { status: 500 }
//       );
//     }

//     let thesis;
//     try {
//       // Save thesis data in the database
//       thesis = await prisma.thesis.create({
//         data: {
//           title,
//           abstract,
//           year,
//           fileUrl: `/uploads/${fileName}`, // Public URL
//           authorId: parseInt(authorId, 10),
//           status: "PENDING",
//         },
//       });
//       console.log("Thesis created successfully:", thesis);
//     } catch (thesisError) {
//       console.error("Error creating thesis entry:", thesisError);
//       return NextResponse.json(
//         { error: "Failed to save thesis data. Please try again." },
//         { status: 500 }
//       );
//     }

//     try {
//       // Create a corresponding entry in the Statistics table
//       await prisma.statistics.create({
//         data: {
//           thesisId: thesis.id, // Use thesisId to establish the one-to-one relationship
//           views: 0, // Initial views count
//           downloads: 0, // Initial downloads count
//           lastViewed: new Date(), // Default to current time to avoid null
//           lastDownloaded: new Date(), // Default to current time to avoid null
//         },
//       });
//       console.log("Statistics entry created successfully.");
//     } catch (statsError) {
//       console.error("Error creating statistics entry:", statsError);

//       // Clean up by deleting the thesis entry to avoid orphan records
//       try {
//         await prisma.thesis.delete({ where: { id: thesis.id } });
//         console.log("Rolled back thesis creation due to statistics error.");
//       } catch (rollbackError) {
//         console.error(
//           "Error rolling back thesis after statistics failure:",
//           rollbackError
//         );
//       }

//       return NextResponse.json(
//         { error: "Failed to save statistics data. Please try again." },
//         { status: 500 }
//       );
//     }

//     console.log("Thesis and statistics created successfully.");

//     return NextResponse.json(
//       { message: "Thesis submitted successfully.", thesis },
//       { status: 201 }
//     );
//   } catch (error) {
//     console.error("Unexpected error submitting thesis:", error);
//     return NextResponse.json(
//       { error: "Failed to submit thesis. Please try again." },
//       { status: 500 }
//     );
//   }
// }
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { promises as fs } from "fs";
import path from "path";

// Directory where files will be stored
const UPLOADS_DIR = path.join(process.cwd(), "public", "uploads");

// Ensure the uploads directory exists
async function ensureUploadsDir() {
  try {
    await fs.access(UPLOADS_DIR);
  } catch (error) {
    console.log("Uploads directory not found. Creating it...");
    await fs.mkdir(UPLOADS_DIR, { recursive: true });
  }
}

export async function POST(req) {
  try {
    // Ensure the uploads directory exists
    await ensureUploadsDir();

    // Parse the form data
    const formData = await req.formData();
    const title = formData.get("title");
    const abstract = formData.get("abstract");
    const authorId = formData.get("authorId");
    const year = parseInt(formData.get("year"), 10);
    const file = formData.get("file");

    // Validate form data
    if (!title || !abstract || !authorId || !year || !file) {
      console.error("Validation error: Missing required fields.");
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    // Save the uploaded file to the folder
    const fileName = `${Date.now()}-${file.name}`;
    const filePath = path.join(UPLOADS_DIR, fileName);

    try {
      console.log("Saving file to:", filePath);
      await fs.writeFile(filePath, Buffer.from(await file.arrayBuffer()));
      console.log("File saved successfully:", filePath);
    } catch (fileError) {
      console.error("Error saving the file:", fileError);
      return NextResponse.json(
        { error: "Failed to save the uploaded file. Please try again." },
        { status: 500 }
      );
    }

    let thesis;
    try {
      // Save thesis data in the database
      thesis = await prisma.thesis.create({
        data: {
          title,
          abstract,
          year,
          fileUrl: `/uploads/${fileName}`, // Public URL
          authorId: parseInt(authorId, 10),
          status: "PENDING",
        },
      });
      console.log("Thesis created successfully:", thesis);
    } catch (thesisError) {
      console.error("Error creating thesis entry:", thesisError);
      return NextResponse.json(
        { error: "Failed to save thesis data. Please try again." },
        { status: 500 }
      );
    }

    try {
      // Generate random values for views and downloads
      const randomViews = Math.floor(Math.random() * 100) + 1; // Random between 1 and 100
      const randomDownloads = Math.floor(Math.random() * 100) + 1; // Random between 1 and 100

      // Create a corresponding entry in the Statistics table
      await prisma.statistics.create({
        data: {
          thesisId: thesis.id, // Use thesisId to establish the one-to-one relationship
          views: randomViews, // Random initial views count
          downloads: randomDownloads, // Random initial downloads count
          lastViewed: new Date(), // Default to current time to avoid null
          lastDownloaded: new Date(), // Default to current time to avoid null
        },
      });
      console.log("Statistics entry created successfully.");
    } catch (statsError) {
      console.error("Error creating statistics entry:", statsError);

      // Clean up by deleting the thesis entry to avoid orphan records
      try {
        await prisma.thesis.delete({ where: { id: thesis.id } });
        console.log("Rolled back thesis creation due to statistics error.");
      } catch (rollbackError) {
        console.error(
          "Error rolling back thesis after statistics failure:",
          rollbackError
        );
      }

      return NextResponse.json(
        { error: "Failed to save statistics data. Please try again." },
        { status: 500 }
      );
    }

    console.log("Thesis and statistics created successfully.");

    return NextResponse.json(
      { message: "Thesis submitted successfully.", thesis },
      { status: 201 }
    );
  } catch (error) {
    console.error("Unexpected error submitting thesis:", error);
    return NextResponse.json(
      { error: "Failed to submit thesis. Please try again." },
      { status: 500 }
    );
  }
}
