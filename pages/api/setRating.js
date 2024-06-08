import clientPromise from "./mongodbConnection";
import { ObjectId } from "mongodb";

export default async (req, res) => {
  try {
    const client = await clientPromise;
    const db = client.db("manualdb");
    const { id } = req.query;
    const { type, value } = req.body;
    let post;

    if (type == 'votefor') {
        post = await db.collection("tutorial").updateOne(
            {
              _id: new ObjectId(id),
            },
            {
              $set: {
                votefor: value,
              },
            }
          );
    } else {
        post = await db.collection("tutorial").updateOne(
            {
              _id: new ObjectId(id),
            },
            {
              $set: {
                voteagainst: value,
              },
            }
          );
    }

    res.json(post);
  } catch (e) {
    console.error(e);
    throw new Error(e).message;
  }
};