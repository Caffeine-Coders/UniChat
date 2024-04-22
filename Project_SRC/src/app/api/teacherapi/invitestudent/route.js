import { NextResponse } from "next/server";
import { client, connectToMongoDB } from "../../../teacher/dbconnections/mongo.js"

export async function POST(request) {
const data = await request.json()
console.log("route file",data.inviteList)
  // Connect to the MongoDB database
  const db = client.db("universityatalbanyDB");

  // Get the collection you want to work with
  const collection = db.collection("classes");
  const classdata = await collection.findOne({gradelevel:data.number, classname: data.name, term: data.year})
  const result = await collection.updateOne(
    { _id: classdata._id }, 
    { $push: { students: { $each: data.inviteList } } }
);
return new Response("Class added successfully", { status: 200 });
}
