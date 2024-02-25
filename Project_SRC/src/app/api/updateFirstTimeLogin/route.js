import { NextResponse } from "next/server";
import { client } from "../../../Services/MongoDB_Routines";

export async function PUT(request) {
  const data = await request.json();

  // Connect to the MongoDB database
  const db = client.db("studentDB");

  // Get the collection you want to work with
  const collection = db.collection("students");

  // Query the collection for a document with the given email
  const user = await collection.findOne({ email: data.email });

  // Check if the user exists
  if (user) {
    // Update the user data
    await collection.updateOne(
      { email: data.email },
      { $set: { isFirstTimeLogin: false } }
    );

    return NextResponse.json({
      status: "Updated",
    });
  } else {
    return NextResponse.json({ type: "User not found" });
  }
}
