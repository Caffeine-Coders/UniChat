import { NextResponse } from "next/server";
import { client, connectToMongoDB } from "../../dbconnections/mongo.js"
import { ObjectId } from "mongodb";

export async function POST(request) {
const data = await request.json()
const slist = data.slist.split(",")
const tlist = data.tlist.split(",")
console.log("dataaaa in add project",slist,tlist)
  const db = client.db("universityatalbanyDB");

  // Get the collection you want to work with
  const collection = db.collection("projects");
  const result = await collection.insertOne({projectName:data.pname,projectDescription: data.pgoal, studentIds : slist, teacherIds : tlist, nativeChat : data.chat, discordServerId: "", url : ""})
    let pid = result.insertedId
    pid = pid.toString()
    const ids = [pid]
    const newcollection = db.collection("classes")
    const targetclass = await newcollection.findOne({gradelevel:data.cnum, classname:data.cname, term:data.cyear})
    console.log("heree in pid",ids , targetclass._id)
    const done = await newcollection.updateOne(
        { _id: targetclass._id },
        
        { $push: { projects:  {$each : ids}  } }
    );
    console.log("doneeee",done)
return new Response("Class added successfully", { status: 200 });
}
