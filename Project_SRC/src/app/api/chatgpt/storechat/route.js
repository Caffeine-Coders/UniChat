import { NextResponse } from "next/server";
import { client } from "../../../../Services/MongoDB_Routines";
import { ObjectId } from 'mongodb';

export async function POST(request) {
    
    try
    {
        const {databasename, projectID, messages} = await request.json();
        console.log("Request received:", databasename, projectID, messages);
        
        await client.connect();
        console.log("Connected to MongoDB");

        const database = client.db(databasename);
        console.log("Selected database:", databasename);
        const collection = database.collection("projects");
        const filter = { _id: ObjectId.createFromHexString(projectID) };
        const updateDoc = {
            $set: {
                messages: messages
            },
        };
        const result = await collection.updateOne(filter, updateDoc);

        if (result.modifiedCount > 0) {
            console.log("Messages updated successfully.");
            return NextResponse.json({ status: 200, message: "Messages updated successfully." });
        }
        else {
            console.log("Messages not updated.");
            return NextResponse.json({ status: 500, message: "Messages not updated." });
        }
    }
    catch(err){    
        console.error("Error:", err);
        return NextResponse.json({ status: 500, message: err });
    }
    finally{
        await client.close();
    }
}

export async function GET() {
    try{
        const url = new URL(request.url);
        const projectID = new URLSearchParams(url.search).get("projectID");
        const databasename = new URLSearchParams(url.search).get("databasename");
        await client.connect();
        console.log("Connected to MongoDB");

        const database = client.db(databasename);
        console.log("Selected database:", databasename);
        const collection = database.collection("projects");
        const filter = { _id: ObjectId.createFromHexString(projectID) };
        const result = await collection.findOne(filter).toArray();

        if (result) {
            console.log("Messages retrieved successfully.");
            return NextResponse.json(result);
        }
        else {
            console.log("Messages not found.");
            return NextResponse.json({ status: 500, message: "Messages not found." });
        }
        
    }
    catch(err){
        console.error("Error:", err);
        return NextResponse.json({ status: 500, message: err });
    }
    finally{
        await client.close();
    }
}