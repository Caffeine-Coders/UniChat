import { NextResponse } from "next/server";
import { client, connectToMongoDB } from "../../dbconnections/mongo.js"
import { ObjectId } from "mongodb";


export async function POST(request) {
    const data = await request.json();
    console.log("route here")
  // Connect to the MongoDB database
    const db = client.db("universityatalbanyDB");
  // Get the collection you want to work with
    const collection = db.collection("classes");
    const classes = await collection.find({gradelevel:data.classnumber, classname:data.classname, term:data.classyear}).toArray()
    console.log("projects",classes)
    const projects = classes.flatMap(cls => cls.projects);
    const projectcollection = db.collection("projects")
    const projectdata = []
    for(const projectid of projects){
        const project = await projectcollection.findOne({ _id: new ObjectId(projectid)})
        console.log("proj",project)
        projectdata.push(project)
    }
    

  if (classes) {
    console.log("all projects", projectdata)
    
    return NextResponse.json(projectdata)
    }
    
  else {
    console.log("not found any classes")
    return NextResponse.json(
        {message:"nothing found"}
    )
  }
}
