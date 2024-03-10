const { MongoClient } = require("mongodb");

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

async function connectToMongoDB() {
  try {
    await client.connect();
    return true;
  } catch (error) {
    console.error("Error connecting to MongoDB: ", error);
    return false;
  }
}

module.exports = { connectToMongoDB, client };