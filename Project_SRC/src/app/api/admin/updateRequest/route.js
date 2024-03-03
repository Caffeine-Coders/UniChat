import { client } from "../../../../Services/MongoDB_Routines";
import { NextResponse } from "next/server";

export async function PUT(request) {
    
        try{
            const data = await request.json();
            const { schoolname, approvalStatus } = data;
            if (!schoolname || !approvalStatus) {
                return NextResponse(({ status: 400, message: "Missing required fields." }), { status: 400, headers: { 'Content-Type': 'application/json' } });
            }
            // Connect to the MongoDB database
            await client.connect();
            const database = client.db("NewRequests");
            const collection = database.collection("Requests");
            const filter = { schoolname: schoolname };
            const updateDocument = {
                $set: {
                    approvalStatus: approvalStatus
                }
            };

            const result = await collection.updateMany(filter, updateDocument);
            if (result.modifiedCount > 0) {
                // Return a success response
                return NextResponse.json({status: 200, message: "Request Approved successfully."});
            } else {
                // Return a response indicating that no documents were updated
                return NextResponse.json({status: 500, message: "Request Approval not successfully."});
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