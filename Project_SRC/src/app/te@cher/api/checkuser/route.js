import { NextResponse } from "next/server";
import { client, connectToMongoDB } from "../../dbconnections/mongo";

export async function POST(request) {
  const data = await request.json();

  // Connect to the MongoDB database
  const db = client.db("teacherDB");

  // Get the collection you want to work with
  const collection = db.collection("teachers");

  // Query the collection for a document with the given email
  const user = await collection.findOne({ email: data.email });

  // Check if the user exists
  if (user) {
    console.log("Verified")
    return NextResponse.json({
      type: "Verified",
      isFirstTimeLogin: user.isFirstTimeLogin,
    });
  } else {
    console.log("not Verified")
    return NextResponse.json({ type: "Not Verified" });
  }
}
