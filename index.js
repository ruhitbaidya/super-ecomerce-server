const express = require('express');
const cors = require('cors');
const logins  = require('./Controler/login.control');
const  register  = require('./Controler/register.control');
const dbConneced = require('./DBConfig/dbConfiger');
const router = require('./router/authRouter');
require('dotenv').config();
const app = express();

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }));


app.use('/auth', router)



app.listen(process.env.PORT, async()=>{
    console.log('super econrce start' + process.env.PORT)
    await dbConneced()
})