// dbName: super-ecomerce
//dbPass : vO5UaAFmWRc3yiZN


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://super-ecomerce:vO5UaAFmWRc3yiZN@datafind.xfgov3s.mongodb.net/?retryWrites=true&w=majority&appName=datafind";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
    // all db collections
    const userCollections = client.db('super-ecomerce').createCollection("allUsers");

    
    module.exports  = {userCollections}
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);