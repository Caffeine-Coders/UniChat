import { NextResponse } from "next/server";
import { client, connectToMongoDB } from "../../../teacher/dbconnections/mongo.js"
import { ObjectId } from "mongodb";

export async function POST(request) {
    const data = await request.json();
    console.log("route here", data)
  // Connect to the MongoDB database
    const db = client.db("universityatalbanyDB");
  // Get the collection you want to work with
    const collection = db.collection("classes");
    const classes = await collection.find({teachers:data.teacheremail}).toArray();
    console.log("classes",classes)
  if (classes) {
    // console.log("all classes", classes)
    return NextResponse.json(classes)
    }
    
  else {
    console.log("not found any classes")
    return NextResponse.json(
        {message:"nothing found"}
    )
  }
}
