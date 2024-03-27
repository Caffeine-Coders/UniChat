import { NextResponse } from "next/server";
import { client, connectToMongoDB } from "../../dbconnections/mongo.js"

export async function GET(request) {
    console.log("route here")
    const currentemail = localStorage.getItem("Temail")
    console.log("got email",currentemail)
  // Connect to the MongoDB database
    const db = client.db("universityatalbanyDB");
  // Get the collection you want to work with
    const collection = db.collection("classes");
    const classes = await collection.find({teachers:currentemail}).toArray()
  if (classes) {
    console.log("all classes", classes)
    return NextResponse.json(classes)
    }
    
  else {
    console.log("not found any classes")
    return NextResponse.json(
        {message:"nothing found"}
    )
  }
}
