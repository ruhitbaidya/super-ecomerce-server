const { getUserCollection } = require("../db/dbConfiger");


const register = async(req, res)=>{
    console.log(req.body)
    try{
      const userCollections = getUserCollection().userCollections
      const findEmail = await userCollections.findOne({email : req.body.email});
      const matchemail = await findEmail
      
      if(!matchemail){
        const result = await userCollections.insertOne(req.body)
        return res.send({message: 'Successfully Register',result})
      }else{          
        return res.send({message : 'You Cannot Register This Email'})
      }
    }
    catch(err){
     return  res.status(402).json({message : 'Error In Server Register'})
    }
  }

  module.exports =  register