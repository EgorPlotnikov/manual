import clientPromise from "./mongodbConnection";
import { ObjectId } from "mongodb";

export default async (req, res) => {
  try {
    const client = await clientPromise;
    const db = client.db("manualdb");
    const { request } = req.query;

    let requestArray = request.split('.')

    let linksFrom = 'instruction';
    if (requestArray[0] == 'instruction') linksFrom = 'failure'
    
    const post = await db.collection(requestArray[0]).findOne({
      _id: new ObjectId(requestArray[1]),
    });

    let resArray = [];
    resArray.push(post)

    for (let i = 0; i < post.links.length; i++) {
      const element = await db.collection(linksFrom).findOne({
        _id: new ObjectId(post.links[i]),
      });
      resArray.push(element)
    }

    res.json(resArray);
  } catch (e) {
    console.error(e);
    throw new Error(e).message;
  }
};