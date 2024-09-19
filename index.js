const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();


app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
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


    app.post('/registerUser', async(req, res)=>{
      console.log(req.body)
      try{
        const findEmail = (await userCollections).findOne({email : req.body.email});
        const matchemail = await findEmail
        if(!matchemail){
          const result = (await userCollections).insertOne(req.body)
          return res.send({message: 'Successfully Register',result})
        }else{          
          return res.send({message : 'You Cannot Register This Email'})
        }
      }
      catch(err){
       return  res.status(402).json({message : 'Error In Server Register'})
      }
    })

    app.post('/login', async(req, res)=>{
      const {email, password} = req.body;
      const result = (await userCollections).findOne({email : email});
      const matchresult = await result
      if(matchresult.email === email && matchresult.password === password){
        return res.send({message : 'Successfylly Login'})
      }else{
        return res.send({message : 'Invalid Creadiential'})
      }
    })


  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);



app.listen(5000, ()=>{
    console.log('super econrce start')
})