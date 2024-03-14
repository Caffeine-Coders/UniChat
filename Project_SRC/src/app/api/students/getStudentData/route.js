import { NextResponse } from "next/server";
import { client } from "../../../../Services/MongoDB_Routines";
import { ObjectId } from "mongodb"; // Import the ObjectId class from the mongodb package
export async function GET(request)
{
    const url = new URL(request.url);
    const databasename = url.searchParams.get("databasename");
    const studentId = new URLSearchParams(url.search).get("studentId")

    await client.connect();
    const db = client.db(databasename);
    const collection = db.collection("students");

    const studentData = await collection.find({ _id: new ObjectId(studentId) }).toArray(); // Use ObjectId to create an instance for the find query
    
    if (studentData.length > 0) {
        return NextResponse.json({
            studentData: studentData,
        });
    } else {
        return NextResponse.json({ type: "No Student Found!" });
    }

}