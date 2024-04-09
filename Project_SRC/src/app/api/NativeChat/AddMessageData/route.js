import { NextResponse } from "next/server";
import { client } from "../../../../Services/MongoDB_Routines";
import { ObjectId } from "mongodb"; // Import the ObjectId class from the mongodb package

export async function PUT(req)
{
    try{

        const data = await req.json();
        const { databasename, projectID, message} = data;
        if (!projectID || !message) {
            return NextResponse.json({status: 400, message: "Missing required fields."});
        }

        await client.connect();

        const database = client.db(databasename);
        const collection = database.collection("projects");
        const filter = { _id: ObjectId.createFromHexString(projectID) };
        const update = {
            $push: {
                messages: {
                    message: message.messageData,
                    sentTime: new Date().toISOString(),
                    sender: message.sender
                }
            }
        };
        const result = await collection.updateOne(filter, update);
        console.log(result);
        return NextResponse.json({status: 200, message: "Message added successfully."});
    }
    catch(err){
        return NextResponse.json({status: 500, message: err});
    }
    finally
    {
        await client.close();
    }
}