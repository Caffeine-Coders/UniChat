import { NextResponse } from "next/server";
import { client, connectToMongoDB } from "../../../teacher/dbconnections/mongo.js"

export async function POST(request) {
  console.log("route here")
  const data = await request.json();

  // Connect to the MongoDB database
  const db = client.db("universityatalbanyDB");

  // Get the collection you want to work with
  const collection = db.collection("teachers");

  // Query the collection for a document with the given email
  const user = await collection.findOne({ email: data.email });

  // Check if the user exists
  if (user) {
    if(user.status){
      console.log("verified and status true")
      return NextResponse.json({
        type: "Verified True",
      });
    }
    else{
      console.log("verified and status false")
      return NextResponse.json({
        type: "Verified False",
      });
    }
  } else {
    console.log("not Verified")
    return NextResponse.json({ type: "Not Verified" });
  }
}
