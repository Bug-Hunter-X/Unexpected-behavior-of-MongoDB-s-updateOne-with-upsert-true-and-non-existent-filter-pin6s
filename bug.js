```javascript
const MongoClient = require('mongodb').MongoClient;

async function run() {
  try {
    const client = new MongoClient(uri);
    await client.connect();
    const database = client.db('mydatabase');
    const collection = database.collection('mycollection');

    // Insert a document
    const doc = { name: "John Doe", age: 30 };
    const result = await collection.insertOne(doc);
    console.log(`Inserted document with _id: ${result.insertedId}`);

    // Find a document
    const query = { name: "John Doe" };
    const found = await collection.findOne(query);
    console.log(`Found document: ${JSON.stringify(found)}`);

    // Update a document
    const updatedDoc = { $set: { age: 31 } };
    const updateResult = await collection.updateOne(query, updatedDoc);
    console.log(`Updated ${updateResult.modifiedCount} document(s)`);

    // Delete a document
    const deleteResult = await collection.deleteOne(query);
    console.log(`Deleted ${deleteResult.deletedCount} document(s)`);

  } finally {
    await client.close();
  }
}

run().catch(console.dir);
```