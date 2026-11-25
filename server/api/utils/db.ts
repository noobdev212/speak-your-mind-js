import { MongoClient } from 'mongodb'
import dotenv from 'dotenv'

dotenv.config();

const client = new MongoClient(process.env.MONGODB);

export async function connectToMongoDB() {
  try {
    await client.connect();
    console.log("You successfully connected to MongoDB!");
  } catch (err) {
    console.dir(err);
  }
}

export async function disconnectFromMongoDB() {
  await client.close();
}

connectToMongoDB();

export const db = client.db('sym');

