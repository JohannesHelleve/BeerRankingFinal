import { MongoClient } from "mongodb";

const client = new MongoClient({secrets.MONGO_URL});

export function start_mongo () {
    console.log("Starting mongo");
    return client.connect();
    }

export default client.db("okayletsgo");