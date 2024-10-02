const express = require('express');
const register = require('../Controler/register.control');
const tokenVerify = require('../tokengen/tokenVerify');
const verifyOtpUser = require('../controler/UserVerifyOtp');
const login = require('../Controler/login.control');

const router = express.Router();



router.post('/register', register)
router.post('/verifyCheck', tokenVerify)
router.post('/verifyUser', verifyOtpUser)
router.post('/login', login)
module.exports = router