const express = require('express');
const register = require('../Controler/register.control');
const tokenVerify = require('../tokengen/tokenVerify');
const verifyOtpUser = require('../controler/UserVerifyOtp');

const router = express.Router();



router.post('/register', register)
router.post('/verifyCheck', tokenVerify)
router.post('/verifyUser', verifyOtpUser)
module.exports = router