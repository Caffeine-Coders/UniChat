import { client } from "../../../../Services/MongoDB_Routines";
import { NextResponse } from "next/server";

//create database and insert the admin of the school.
export async function POST(request) {

    try{
        const {databasename, collectioname, data} = await request.json();
        // Connect to the MongoDB database
        await client.connect();
        const database = client.db(databasename);

        await database.createCollection(collectionName);
        const collection = database.collection(collectioname);
        
        await collection.insertMany(data);
        return NextResponse.json({status: 200, message: "Database created and data inserted successfully."});
    }
    catch(err){
        return NextResponse.json({status: 500, message: err});
    }
    finally
    {
        await client.close();
    }
}