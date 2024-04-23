import { NextResponse } from "next/server";
import { client, connectToMongoDB } from "../../../teacher/dbconnections/mongo.js"
import { ObjectId } from "mongodb";


export async function POST(request) {
    const data = await request.json();
    console.log("got data here ",data)
    const db = client.db("universityatalbanyDB");
    const collection = db.collection("projects");
    const response = await collection.findOne({_id: new ObjectId(data.projectID)})
    console.log("found this ",response)
    const updated = [...response.messages,data.message]
    await collection.updateOne(
        { _id : new ObjectId(data.projectID)},
        {$set: {messages: updated}}
    )
    console.log("done updated")
    return new Response("Message added successfully", { status: 200 });
}
