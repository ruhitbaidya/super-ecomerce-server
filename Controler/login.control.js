const registerModel = require("../model/register.model")



const login = async(req, res)=>{
    console.log(req.body)
    try{
      const {email, password} = req.body
      const findUser = await registerModel.findOne({email})
      console.log(findUser)
      if(findUser){
        if(findUser.password === password){
          res.send({message : "Successfully Login"})
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