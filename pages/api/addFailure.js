import clientPromise from "./mongodbConnection";


export const config = {
  api: {
    bodyParser: {
      sizeLimit: '10mb',
    },
  },
}

export default async (req, res) => {
  try {
    const client = await clientPromise;
    const db = client.db("manualdb");
    const { heading, author, text, date, links, make, model } = req.body;

    const post = await db.collection("failure").insertOne({
      heading, 
      author, 
      text, 
      date,
      links,
      make,
      model,
    });

    res.json(post);
  } catch (e) {
    console.error(e);
    throw new Error(e).message;
  }
};
