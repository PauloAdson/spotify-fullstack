// JavaScript Assincrono
// await async
// FullFilled

import { MongoClient } from "mongodb";

const URI =
  "mongodb+srv://pauloalves200581:29Kz8EYpoVNaCHMA@cluster0.ybvq8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URI);

export const db = client.db("spotifyAula");
// const songCollection = await db.collection("songs").find({}).toArray();

// console.log(songCollection);
