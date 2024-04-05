import { NextResponse } from "next/server";
import { client, connectToMongoDB } from "../../dbconnections/mongo.js"
import { ObjectId } from "mongodb";

export async function POST(request) {
const data = await request.json()
const slist = await data.slist.split(",")
const tlist = await data.tlist.split(",")
console.log("dataaaa in add project",slist,tlist)
  const db = client.db("universityatalbanyDB");

  // Get the collection you want to work with
  const collection = db.collection("projects");
  let sids = []
  const studentcollection = db.collection("students")
  const newcollection =  db.collection("classes")
  for (const email in slist){
    console.log("emails",slist[email])
    const response = await studentcollection.findOne({email:slist[email]})
    if (response){
    console.log("response",response._id)
    sids.push(response._id)
    }
  }
  const result = await collection.insertOne({projectName:data.pname,projectDescription: data.pgoal, studentIds : sids, teacherIds : tlist, nativeChat : data.chat, discordServerId: "", url : data.url})
    let pid = result.insertedId
    pid = pid.toString()
    // const ids = [pid]
    console.log("got pid",data.cnum, data.cname, data.cyear)
    const cnum = data.cnum.replace(/"/g, "")
    const cname = data.cname.replace(/"/g,"")
    const targetclass = await newcollection.findOne({gradelevel:cnum, classname:cname, term:data.cyear})
    console.log("heree in pid" , targetclass)
    const done = await newcollection.updateOne(
        { _id: targetclass._id },
        
        { $push: { projects:  pid  } }
    );
    console.log("doneeee")
return new Response("Class added successfully", { status: 200 });
}
