const { getUserCollection } = require("../db/dbConfiger");


const login = async(req, res)=>{
    const {email, password} = req.body;
    console.log(email, password)
    const userCollections = getUserCollection().userCollections
    const result = await userCollections.findOne({email : email});
    const matchresult = await result
    if(matchresult.email === email && matchresult.password === password){
      return res.send({message : 'Successfylly Login'})
    }else{
      return res.send({message : 'Invalid Creadiential'})
    }
  }

module.exports = login