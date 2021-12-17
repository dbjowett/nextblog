// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { MongoClient } from 'mongodb';

const URI = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.rm7by.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`;

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, name, message } = req.body;

    if (!email || !email.includes('@') || !name || name.trim() === '' || !message || message.trim() === '') {
      res.status(422).json({ message: 'Invalid input' });
      return;
    }

    const newMessage = {
      email,
      name,
      message
    };

    let client = await MongoClient.connect(URI);

    try {
      client = await MongoClient.connect(URI);
    } catch (err) {
      res.status(500).json({ message: 'Could not connect to database;' });
      console.log(err);
      return;
    }

    const db = client.db();

    try {
      const result = await db.collection('messages').insertOne(newMessage);
      newMessage._id = result.insertedId;
    } catch (err) {
      client.close();
      res.status(500).json({ message: 'Message storing failed' });
      return;
    }

    client.close();

    res.status(201).json({ message: 'Message Stored successfully' });
  }
}
