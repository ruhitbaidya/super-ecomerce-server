const express = require('express');
const register = require('../Controler/register.control');
const tokenVerify = require('../tokengen/tokenVerify');
const verifyOtpUser = require('../controler/UserVerifyOtp');
const login = require('../Controler/login.control');
const getAllUsers = require('../controler/getAllUsers');

const router = express.Router();



router.post('/register', register)
router.post('/verifyCheck', tokenVerify)
router.post('/verifyUser', verifyOtpUser)
router.post('/login', login)
router.get('/all-user', getAllUsers)
module.exports = router