const registerModel = require("../model/register.model")
const tokenGenarate = require("../tokengen/tokenGenerate")

const login = async(req, res)=>{
    try{
      const {email, password} = req.body
      const findUser = await registerModel.findOne({email})
      console.log(findUser)
      if(findUser){
        if(findUser.password === password){
          const tokenGen = tokenGenarate(findUser.email)
          res.send({message : "Successfully Login", token : tokenGen})
        }else{
          res.send({message : "Authantaction Failed!"})
        }
      }else{
        res.send({message : "Authantaction Failed!"})
      }
    }
    catch(err){
      res.send({message : err.message})
    }
  }

module.exports = login