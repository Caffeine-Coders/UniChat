import { NextResponse } from "next/server";
import { client } from "../../../../Services/MongoDB_Routines";

export async function POST(request) {
  const data = await request.json();

  await client.connect();
  // Connect to the MongoDB database
  const db = client.db("universityatalbanyDB");

  // Get the collection you want to work with
  const collection = db.collection("students");

  // Query the collection for a document with the given email
  const user = await collection.findOne({ email: data.email });

  // Check if the user exists
  if (user) {
    return NextResponse.json({
      type: "Registered",
      isFirstTimeLogin: user.isFirstTimeLogin,
      studentId: user._id,
    });
  } else {
    return NextResponse.json({ type: "Unregistered" });
  }
}
