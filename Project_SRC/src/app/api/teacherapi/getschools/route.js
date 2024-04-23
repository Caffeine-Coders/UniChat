import { NextResponse } from "next/server";
import { client, connectToMongoDB } from "../../../teacher/dbconnections/mongo.js"

export async function GET(request) {
    console.log("route here")
  // Connect to the MongoDB database
  const db = client.db("SchoolRequestDB");
  // Get the collection you want to work with
  const collection = db.collection("SchoolRequests");

const schools = await collection.find().toArray()
  
  if (schools) {
    console.log("all schools", schools)
    return NextResponse.json(schools)
    }
    
  else {
    console.log("not found any school")
    return NextResponse.json(
        {}
    )
  }
}
