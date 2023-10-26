import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGO_URL);

export function start_mongo () {
    console.log("Starting mongo");
    return client.connect();
    }

export default client.db("okayletsgo");