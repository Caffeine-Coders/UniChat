import { NextResponse } from "next/server";
import { client, connectToMongoDB } from "../../dbconnections/mongo.js"
import { ObjectId } from "mongodb";


export async function POST(request) {
    const data = await request.json();
    console.log("route here",data.email)
    
  // Connect to the MongoDB database
    const db = client.db("universityatalbanyDB");
  // Get the collection you want to work with
    
    const teachercollection = db.collection("teachers")
    
    
      const teacher = await teachercollection.findOne({email: data.email.replace(/"/g,"")})
        const msgs = teacher.gpt
    
   
  if (teacher) {
    
    return NextResponse.json({msgs})
    }
    
  else {
    console.log("not found any names")
    return NextResponse.json(
        {message:"nothing found"}
    )
  }
}
