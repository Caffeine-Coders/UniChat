import { NextResponse } from "next/server";
import { client, connectToMongoDB } from "../../dbconnections/mongo.js"
import { ObjectId } from "mongodb";


export async function POST(request) {
    const data = await request.json();
    
  
    const db = client.db("universityatalbanyDB");
    const collection = db.collection("projects");
    let project = await collection.findOne({projectName : data.projectname})
    const stdid = project.studentIds
    const studentcollection = db.collection("students")
    let stdemails = []
    for ( const ids in stdid){
      console.log("ids",ids)
      const response = await studentcollection.findOne({_id: new ObjectId(stdid[ids])})
      stdemails.push(response.email)
    }
    console.log("got emails",stdemails)
    delete project["studentIds"]
    project["studentIds"] = stdemails
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
