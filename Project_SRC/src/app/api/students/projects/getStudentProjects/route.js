import { NextResponse } from "next/server";
import { client } from "../../../../../Services/MongoDB_Routines";

export async function GET(request) {
  const url = new URL(request.url);
  const databasename = url.searchParams.get("databasename");
  const studentId = new URLSearchParams(url.search).get("studentId");

  // Connect to the MongoDB database
  const db = client.db(databasename);

  // Get the collection you want to work with
  const collection = db.collection("projects");

  // Query the collection for documents with the given studentId in the studentIds array
  const projects = await collection.find({ studentIds: { $in: [studentId] } }).toArray();

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
