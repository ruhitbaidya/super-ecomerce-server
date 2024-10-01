const express = require('express');
const cors = require('cors');
const logins  = require('./Controler/login.control');
const  register  = require('./Controler/register.control');
const dbConneced = require('./model/dbConfiger');
require('dotenv').config();
const app = express();


app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }));


app.post('/registerUser', register)

app.post('/login', logins)



app.listen(5000, async()=>{
    console.log('super econrce start')
    await dbConneced()
})