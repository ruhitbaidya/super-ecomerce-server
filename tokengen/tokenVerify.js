const jwt = require('jsonwebtoken');
const registerModel = require('../model/register.model');

require('dotenv').config();


const tokenVerify = async(req, res)=>{
    console.log(req.body.token)
    const {token} = req.body;
    const tokendata = jwt.verify(token, process.env.key_secrate)
    const match = await registerModel.findOne({email : tokendata.email}, {acActive : 1, email: 1});
    res.send(match)
}

module.exports = tokenVerify