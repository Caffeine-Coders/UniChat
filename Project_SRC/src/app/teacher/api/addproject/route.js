import { NextResponse } from "next/server";
import { client, connectToMongoDB } from "../../dbconnections/mongo.js"

export async function POST(request) {
const data = await request.json()
const slist = data.slist.split(",")
const tlist = data.tlist.split(",")
  const db = client.db("universityatalbanyDB");

  // Get the collection you want to work with
  const collection = db.collection("projects");
  const result = await collection.insertOne({projectName:data.pname,projectDescription: data.pgoal, studentIds : slist, teacherIds : tlist, nativeChat : data.chat, discordServerId: "", url : ""})
    const pid = result.insertedId
    const newcollection = db.collection("classes")
    const targetclass = await newcollection.findOne({gradelevel:data.cnum, classname:data.cname, term:data.cyear})
    const done = await collection.updateOne(
        { _id: targetclass._id },
        { $push: { projects: { pid } } }
    );
return new Response("Class added successfully", { status: 200 });
}
