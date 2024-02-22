const { connectToMongoDB } = require("../../../MongoDB/MongoDB_Routines");

export async function GET() {
  const isConnected = await connectToMongoDB();
  if (isConnected) {
    return Response.json({ status: "Connected!" });
  } else {
    return Response.json({ status: "Error connecting to MongoDB" });
  }
}
