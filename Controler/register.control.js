const accountActiveMailer = require("../accountActiveMail/accountMailer")
const registerModel = require("../model/register.model")
const tokenGenarate = require("../tokengen/tokenGenerate")

const register = async(req, res)=>{
    console.log(req.body)
    let token = tokenGenarate(req.body.email)
    try{
      const users = {...req.body, acActive : false}
      const matchePrev = await registerModel.findOne({email : req.body.email})
      if(matchePrev){
        if(matchePrev.acActive === false){
          return res.send({message: 'Your Account Already create But Not Verifyed', matchePrev, token }).status(200)
        }
        return res.send({message: 'This Email Already Exist'})
      }
      const registerUser = new registerModel(users)
      const result = (await registerUser.save());
      if(result){
        await accountActiveMailer(req.body.email)
      }
      
      return res.send({message: 'success', matchePrev, token , result}).status(200)
      
    }
    catch(err){
      res.send(err.message)
    }
  }

module.exports =  register