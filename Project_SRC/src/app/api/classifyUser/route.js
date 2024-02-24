import { NextResponse } from "next/server";
import { client } from "../../../Services/MongoDB_Routines";

export async function POST(request) {
  const data = await request.json();

  // Connect to the MongoDB database
  const db = client.db("studentDB");

  // Get the collection you want to work with
  const collection = db.collection("students");

  // Query the collection for a document with the given email
  const user = await collection.findOne({ email: data.email });

  // Check if the user exists
  if (user) {
    return NextResponse.json({
      type: "Registered",
      isFirstTimeLogin: user.isFirstTimeLogin,
    });
  } else {
    return NextResponse.json({ type: "Unregistered" });
  }
}
