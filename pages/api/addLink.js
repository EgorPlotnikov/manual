import clientPromise from "./mongodbConnection";
import { ObjectId } from "mongodb";

export default async (req, res) => {
    try {
      const client = await clientPromise;
      const db = client.db("manualdb");
      const { iid, fid } = req.query;

      if (ObjectId.isValid(iid)) {
        const instruction = await db.collection("instruction").findOne({
            _id: new ObjectId(iid),
        });
        if (instruction != null) {
            let updatedInstructionLinks = []
            instruction.links.forEach(link => {
                updatedInstructionLinks.push(link)
            });
            updatedInstructionLinks.push(fid)
            await db.collection("instruction").updateOne(
                {
                  _id: new ObjectId(iid),
                },
                {
                  $set: {
                    links: updatedInstructionLinks,
                  },
                }
            );

            const failure = await db.collection("failure").findOne({
                _id: new ObjectId(fid),
            });
            let updatedFailureLinks = []
            failure.links.forEach(link => {
                updatedFailureLinks.push(link)
            });
            updatedFailureLinks.push(iid)
            await db.collection("failure").updateOne(
                {
                  _id: new ObjectId(fid),
                },
                {
                  $set: {
                    links: updatedFailureLinks,
                  },
                }
            );
            res.json('Инструкция успешно добавлена')
        } else {res.json('Инструкции по такому идентификатору не существует')}
      } else {res.json('Неверный идентификатор')}
    } catch (e) {
      console.error(e);
      throw new Error(e).message;
    }
  };