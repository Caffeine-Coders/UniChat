import { client } from "../../../../Services/MongoDB_Routines";
import { NextResponse } from "next/server";

export async function PUT(request) {
    try{
        const data = await request.json();
        const {databasename, studentemail, photoUrl} = data;

        if (!studentemail || !photoUrl) {
            return NextResponse(({ status: 400, message: "Missing required fields." }), { status: 400, headers: { 'Content-Type': 'application/json' } });
        }

        // Connect to the MongoDB database
        await client.connect();
        const database = client.db(databasename);
        const collection = database.collection("students");
        const filter = { email: studentemail };
        const updateDocument = {
            $set: {
                photoUrl: photoUrl
            }
        };

        const result = await collection.updateOne(filter, updateDocument);
        if (result.modifiedCount > 0) {
            // Return a success response
            return NextResponse.json({status: 200, message: "Photo URL updated successfully."});
        } else {
            // Return a response indicating that no documents were updated
            return NextResponse.json({status: 500, message: "Photo URL not updated."});
        }
    }
    catch(err){
        return NextResponse.json({status: 500, message: err});
    }
    finally
    {
        await client.close();
    }
}