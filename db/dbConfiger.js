const { MongoClient, ServerApiVersion } = require('mongodb');

// MongoDB connection URI and credentials
const uri = "mongodb+srv://super-ecomerce:vO5UaAFmWRc3yiZN@datafind.xfgov3s.mongodb.net/?retryWrites=true&w=majority&appName=datafind";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

let allCollections = {};  // This will hold the reference to the collection

async function connectDB() {
  try {
    // Connect to the MongoDB server
    await client.connect();
    
    // Ping the database to confirm the connection
    await client.db("admin").command({ ping: 1 });
    console.log("Successfully connected to MongoDB!");

    // Set up the 'userCollections' to point to the 'allUsers' collection in 'super-ecomerce' database
    allCollections = {userCollections : client.db('super-ecomerce').collection('allUsers')};
    
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
  }
}

// Function to get the user collections (or any collection)
function getUserCollection() {
  if (!allCollections) {
    throw new Error("Database not connected yet");
  }
  return allCollections;
}

// Export the connection function and the collection getter
module.exports = { connectDB, getUserCollection };
