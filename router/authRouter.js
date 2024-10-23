const express = require('express');
const register = require('../Controler/register.control');
const tokenVerify = require('../tokengen/tokenVerify');
const verifyOtpUser = require('../controler/UserVerifyOtp');
const login = require('../Controler/login.control');
const getAllUsers = require('../controler/getAllUsers');
const create_payment = require('../controler/create_payment');
const success_payment = require('../controler/success_payment');

const router = express.Router();



router.post('/register', register)
router.post('/verifyCheck', tokenVerify)
router.post('/verifyUser', verifyOtpUser)
router.post('/login', login)
router.get('/all-user', getAllUsers)
router.post('/create_payment', create_payment)
router.post('/success_payment', success_payment)
module.exports = router