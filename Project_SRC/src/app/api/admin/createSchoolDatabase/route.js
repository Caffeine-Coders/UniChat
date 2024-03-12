import { client } from "../../../../Services/MongoDB_Routines";
import { NextResponse } from "next/server";
import { NextResponse } from "next/server";

//create database and insert the admin of the school.
export async function POST(request) {

    try {
        const { databasename, collectionnames} = await request.json();
        // Connect to the MongoDB database
        await client.connect();
        console.log("Connected to MongoDB");

        const database = client.db(databasename);
        console.log("Selected database:", databasename);

        for (const collectionname of collectionnames) 
        {
            await database.createCollection(collectionname);
            console.log(`Collection ${collectionname} created.`);
        }

        return NextResponse.json({ status: 200, message: "Database created and data inserted successfully." });
    }
    catch (err) {
        console.error("Error:", err);
        return NextResponse.json({ status: 500, message: err });
    }
    finally {
        await client.close();
        console.log("MongoDB connection closed");
    }
}