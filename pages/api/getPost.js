import clientPromise from "./mongodbConnection";
import { ObjectId } from "mongodb";

export default async (req, res) => {
  try {
    const client = await clientPromise;
    const db = client.db("manualdb");
    const { id } = req.query;
    
    const post = await db.collection("tutorial").findOne({
      _id: new ObjectId(id),
    });

    res.json(post);
  } catch (e) {
    console.error(e);
    throw new Error(e).message;
  }
};