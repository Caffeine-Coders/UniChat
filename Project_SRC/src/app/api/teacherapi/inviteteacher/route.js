import { NextResponse } from "next/server";
import { client, connectToMongoDB } from "../../../teacher/dbconnections/mongo.js"

export async function POST(request) {
const data = await request.json()
console.log("route file",data.inviteList, data.name, data.number, data.year)
  // Connect to the MongoDB database
  const db = client.db("universityatalbanyDB");
  const num = data.number.replace(/"/g,"")
  const name = data.name.replace(/"/g,"")
  const year = data.year.replace(/"/g,"")
  // Get the collection you want to work with
  const collection = db.collection("classes");
  const classdata = await collection.findOne({gradelevel:num, classname: name, term: year})
  console.log("class",classdata)
  const result = await collection.updateOne(
    { _id: classdata._id }, // Assuming _id is the unique identifier of your class document
    { $push: { teachers: { $each: data.inviteList } } }
);
return new Response("Class added successfully", { status: 200 });
}
