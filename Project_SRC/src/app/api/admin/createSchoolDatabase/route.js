import { client } from "../../../../Services/MongoDB_Routines";
import { NextResponse } from "next/server";

//create database and insert the admin of the school.
export async function POST(request) {

    try {
        const { databasename, collectioname, data } = await request.json();
        // Connect to the MongoDB database
        await client.connect();
        console.log("Connected to MongoDB");

        const database = client.db(databasename);
        console.log("Selected database:", databasename);

        await database.createCollection(collectioname);
        console.log("Collection created:", collectioname);

        const collection = database.collection(collectioname);

        await collection.insertOne(data);
        console.log("Data inserted:", data);

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