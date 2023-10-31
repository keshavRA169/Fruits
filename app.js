
const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = 'mongodb://localhost:27017';

const client = new MongoClient(uri);

async function run() {
  try {
    const database = client.db("fruitsDB");
    const fruit = database.collection("fruit");
    // create a document to insert
    const doc = {
      _id:1,
      title: "Record of a Shriveled Datum",
      content: "No bytes, no problem. Just insert a document, in MongoDB",
    }
    const result = await fruit.insertOne(doc);

    console.log(`A document was inserted with the _id: ${result.insertedId}`);
  } finally {
    await client.close();
  }
}
run().catch(console.dir);
