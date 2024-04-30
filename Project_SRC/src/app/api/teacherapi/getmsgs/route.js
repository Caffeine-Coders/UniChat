import { NextResponse } from "next/server";
import { client, connectToMongoDB } from "../../../teacher/dbconnections/mongo.js"
import { ObjectId } from "mongodb";


export async function POST(request) {
    const data = await request.json();
    console.log("route here",data.projectid)
    
  // Connect to the MongoDB database
    const db = client.db("universityatalbanyDB");
  // Get the collection you want to work with
    
    const projectcollection = db.collection("projects")
    
    
      const targetproject = await projectcollection.findOne({_id: new ObjectId(data.projectid)})
        const msgs = targetproject.messages
    
   
  if (targetproject) {
    
    return NextResponse.json({msgs})
    }
    
  else {
    console.log("not found any project")
    return NextResponse.json(
        {message:"nothing found"}
    )
  }
}
