import { client } from "../../../../Services/MongoDB_Routines";
import { NextResponse } from "next/server";

//create database and insert the admin of the school.
export async function PUT(request) {

    try{
        const data = await request.json();
        // Connect to the MongoDB database
        await client.connect();
        const database = client.db("NewRequests");
        const collection = database.collection("Requests");
        
        await collection.insertOne(data);
        return NextResponse.json({status: 200, message: "New Request Created and data inserted successfully."});
    }
    catch(err){
        return NextResponse.json({status: 500, message: err});
    }
    finally
    {
        await client.close();
    }
}

export async function GET(request) 
{
    try
    {
        const url = new URL(request.url);
        const ApprovalStatus = new URLSearchParams(url.search).get("ApprovalStatus");
        await client.connect();
        const database = client.db("NewRequests");
        const collection = database.collection("Requests");
        const data = await collection.find({approvalStatus: ApprovalStatus}).toArray();
        return NextResponse.json(data);
    }
    catch(err)
    {
        return NextResponse.json({status: 500, message: err});
    }
    finally
    {
        await client.close();
    }

}
