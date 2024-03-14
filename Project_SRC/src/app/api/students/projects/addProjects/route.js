import { NextResponse } from "next/server";
import { client } from "../../../../../Services/MongoDB_Routines";

export async function PUT(request)
{
    const {databasename, projectName, projectDescription, studentIds, nativeChat, discordServerId} = await request.json();

    if (!databasename || !projectName || !projectDescription || !studentIds || !nativeChat || !discordServerId)
    {
        return NextResponse.json({status: 400, message: "Missing required fields."});
    }

    try
    {
        await client.connect();
        const database = client.db(databasename);
        const collection = database.collection("projects");
        const result = await collection.insertOne({projectName, projectDescription, studentIds, nativeChat, discordServerId});
        return NextResponse.json({status: 200, message: "Project added successfully."});
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