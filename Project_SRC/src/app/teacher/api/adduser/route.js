import { NextResponse } from "next/server";
import { client, connectToMongoDB } from "../../dbconnections/mongo.js"

export async function POST(request) {
const data = await request.json()
console.log("route file",data)
  // Connect to the MongoDB database
  const db = client.db("teacherDB");

  // Get the collection you want to work with
  const collection = db.collection("teachers");
   await collection.insertOne(data)
return new Response("User added successfully", { status: 200 });
}
