const registerModel = require("../model/register.model")

const getAllUsers = async(req, res)=>{
    try{
        const result = await registerModel.find();
        console.log('find')
        res.send({data: result})
    }
    catch(err){
        res.send({message: err.message})
    }
}

module.exports = getAllUsers