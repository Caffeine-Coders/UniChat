import { NextResponse } from "next/server";
import { client, connectToMongoDB } from "../../dbconnections/mongo.js"
import { ObjectId } from "mongodb";


export async function POST(request) {
    const data = await request.json();
    
  
    const db = client.db("universityatalbanyDB");
    const collection = db.collection("projects");
    const project = await collection.findOne({projectName : data.projectname})


  if (project) {
    console.log("project found ",project)
    return NextResponse.json(project)
    }
    
  else {
    console.log("not found any classes")
    return NextResponse.json(
        {message:"nothing found"}
    )
  }
}
