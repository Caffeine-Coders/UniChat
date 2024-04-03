import { NextResponse } from "next/server";
import { client, connectToMongoDB } from "../../dbconnections/mongo.js"
import { ObjectId } from "mongodb";


export async function POST(request) {
    const data = await request.json();
    
    const temails = data.temails.split(",")
    const semails = data.semails.split(",") 
    console.log("route here")
    
  // Connect to the MongoDB database
    const db = client.db("universityatalbanyDB");
  // Get the collection you want to work with
    const collection = db.collection("classes");
    const classes = await collection.find({gradelevel:data.classnumber, classname:data.classname, term:data.classyear}).toArray()
    // console.log("projects",classes)
    const projects = classes.flatMap(cls => cls.projects);
    const projectcollection = db.collection("projects")
    const projectdata = []
    for(const projectid of projects){
        const project = await projectcollection.findOne({ _id: new ObjectId(projectid)})
        // console.log("proj",project)
        projectdata.push(project)
    }
    const teachercollection = db.collection("teachers")
    const tnames = []
    for (const teacheremail of temails){
      const teacher = await teachercollection.findOne({email: teacheremail})
      if (teacher){
      tnames.push(teacher.name)
      }
    }
    const studentcollection = db.collection("students")
    const snames = []
    for (const studentemail of semails){
      const student = await studentcollection.findOne({email: studentemail})
      if (student){
      snames.push(student.name)
      }
    }
    
    if (typeof window !== 'undefined'){
      localStorage.setItem("teachernames",tnames, () =>{

      })
      localStorage.setItem("studentnames",snames, () =>{

      })
    }
    // localStorage.setItem("teachernames",tnames)
  if (classes) {
    // console.log("all projects", projectdata)
    console.log("tnames",tnames)
    console.log("snames",snames)
    return NextResponse.json(projectdata)
    }
    
  else {
    console.log("not found any classes")
    return NextResponse.json(
        {message:"nothing found"}
    )
  }
}
