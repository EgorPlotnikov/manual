import clientPromise from "./mongodbConnection";


export default async (req, res) => {
  try {
    const client = await clientPromise;
    const db = client.db("manualdb");
    const { type } = req.query;

    const posts = await db.collection(type).find({}).limit(20).toArray();

    res.json(posts);
  } catch (e) {
    console.error(e);
    throw new Error(e).message;
  }
};