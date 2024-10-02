const jwt = require('jsonwebtoken');
require('dotenv').config()
const tokenGenarate = (email)=>{
    const token = jwt.sign({
        email: email
      }, process.env.key_secrate, { expiresIn: '24h' })
      return token
}


module.exports = tokenGenarate