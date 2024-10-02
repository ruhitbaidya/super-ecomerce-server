const mongoose = require('mongoose')
require('dotenv').config();

const dbConneced = async()=>{
  try{
    await mongoose.connect(`mongodb+srv://${process.env.DB_User}:${process.env.DB_Password}@ruhitbaidya.zsexr.mongodb.net/superEcomerce?retryWrites=true&w=majority&appName=RuhitBaidya`)
    console.log('db is connected')
  }
  catch(err){
    console.log(err.message)
  }
}


module.exports = dbConneced