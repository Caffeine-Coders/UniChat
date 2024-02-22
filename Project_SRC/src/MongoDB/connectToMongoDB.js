const { MongoClient } = require("mongodb");
require("dotenv").config();

const uri = process.env.MONGODB_URI;

async function connectToMongoDB() {
  try {
    const client = new MongoClient(uri);
    await client.connect();
    return true;
  } catch (error) {
    console.error("Error connecting to MongoDB: ", error);
    return false;
  }
}

module.exports = { connectToMongoDB };
