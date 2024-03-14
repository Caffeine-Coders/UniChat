import { NextResponse } from "next/server";
import { client } from "../../../../../Services/MongoDB_Routines";

export async function GET(request) {
  const url = new URL(request.url);
  const studentId = new URLSearchParams(url.search).get("studentId");

  // Connect to the MongoDB database
  const db = client.db("universityatalbanyDB");

  // Get the collection you want to work with
  const collection = db.collection("projects");

  // Query the collection for a document with the given studentId
  const projects = await collection.find({ studentId: studentId }).toArray();

  // Check if any projects were found
  if (projects.length > 0) {
    // Return the projects
    return NextResponse.json({
      projects: projects,
    });
  } else {
    return NextResponse.json({ type: "No Projects Found!" });
  }
}
