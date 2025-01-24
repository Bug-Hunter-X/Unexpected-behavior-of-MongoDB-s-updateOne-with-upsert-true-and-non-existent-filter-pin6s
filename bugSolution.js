```javascript
const { MongoClient } = require('mongodb');

async function run() {
  try {
    const client = new MongoClient(uri);
    await client.connect();
    const db = client.db('mydatabase');
    const collection = db.collection('mycollection');

    const filter = { name: 'NonExistentUser' };
    const updateDoc = { $set: { age: 40 } };
    const options = { upsert: true };

    // Find if the document exists, if not insert it
    const existingDoc = await collection.findOne(filter);
    if (existingDoc) {
      const result = await collection.updateOne(filter, updateDoc, options);
      console.log('Document Updated:', result);
    } else {
      const insertResult = await collection.insertOne({...filter, ...updateDoc});
      console.log('Document Inserted:', insertResult);
    }
  } finally {
    await client.close();
  }
}

run().catch(console.dir);
```