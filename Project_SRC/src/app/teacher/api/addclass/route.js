import { NextResponse } from "next/server";
import { client, connectToMongoDB } from "../../dbconnections/mongo.js"

export async function POST(request) {
const data = await request.json()
console.log("route file",data.studentname)
  // Connect to the MongoDB database
  const db = client.db("universityatalbanyDB");

  // Get the collection you want to work with
  const collection = db.collection("classes");
   await collection.insertOne(data)
  const newcollection = db.collection("students")
  let pointer = 0
  for(const email of data.students){
    const exists = await newcollection.findOne({email})
    if (!exists){
      await newcollection.insertOne({email:email, isFirstTimeLogin:true, name:data.studentname[pointer]})
    }
    pointer = pointer + 1;
  }
return new Response("Class added successfully", { status: 200 });
}
