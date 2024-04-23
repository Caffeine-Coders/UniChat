import { NextResponse } from "next/server";
import { client, connectToMongoDB } from "../../../teacher/dbconnections/mongo.js"
import { ObjectId } from "mongodb";


export async function POST(request) {
    const data = await request.json();
    const temails = data.temails.split(",")
    const semails = data.semails.split(",") 
    console.log("route here",data)
    
  // Connect to the MongoDB database
    const db = client.db("universityatalbanyDB");
  // Get the collection you want to work with
    
    const teachercollection = db.collection("teachers")
    const tnames = []
    console.log("temails",temails)
    for (const teacheremail of temails){
        console.log("herere in teacher",teacheremail)
      const teacher = await teachercollection.findOne({email: teacheremail})
      if (teacher){
      tnames.push(teacher.name)
      }
    }
    const studentcollection = db.collection("students")
    const snames = []
    for (const studentemail of semails){
      let student = await studentcollection.findOne({email: studentemail})
      if (!student){
        student = await studentcollection.findOne({_id: new ObjectId(studentemail)})
      }
      if (student){
      snames.push(student.name)
      }
    }
    
   
  if (tnames) {
    console.log("wohoo",tnames,snames)
    return NextResponse.json({snames,tnames})
    }
    
  else {
    console.log("not found any names")
    return NextResponse.json(
        {message:"nothing found"}
    )
  }
}
