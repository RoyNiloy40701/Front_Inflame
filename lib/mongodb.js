import { MongoClient } from "mongodb";

let cachedClient = null;
let cachedDb = null;

export default async function connectToDatabase() {
  if (cachedDb) return cachedDb;

  const client = new MongoClient(process.env.MONGODB_URI);
  try {
    await client.connect();
    cachedClient = client;
    cachedDb = client.db();
    return cachedDb;
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error;
  }
}