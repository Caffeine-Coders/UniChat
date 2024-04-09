import { NextResponse } from "next/server";
import { client, connectToMongoDB } from "../../dbconnections/mongo.js"

export async function POST(request) {
const data = await request.json()
console.log("route file",data)
  // Connect to the MongoDB database
  const db = client.db("universityatalbanyDB");
  // Get the collection you want to work with
  const collection = db.collection("teachers");
//   const res = await collection.findOne({email : "forumshah0809@gmail.com"})
// res.gpt.push(data.messages)
// await collection.updateOne(
//     {email:res.email},
//     {$set : {gpt : res.gpt}}
// )
return new Response("User added successfully", { status: 200 });
}
