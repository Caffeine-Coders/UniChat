import { client } from "../../../../Services/MongoDB_Routines";
import { NextResponse } from "next/server";

//create database and insert the admin of the school.

export async function GET(request)
{
    try{
        const {databasename, collectioname, studentID} = await request.json();
        // Connect to the MongoDB database
        await client.connect();
        const database = client.db(databasename);
        const collection = database.collection(collectioname);
        
        const data = await collection.find({studentID: studentID}).toArray();
        return NextResponse.json({status: 200, data: data});
    }
    catch(err){
        return NextResponse.json({status: 500, message: err});
    }
    finally
    {
        await client.close();
    }
}