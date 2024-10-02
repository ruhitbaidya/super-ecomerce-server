const mongoose = require("mongoose");


const emailVerifecationSchema = mongoose.Schema({
    email : {
        type : String,
        required : true
    },
    otpCode : {
        type : String,
        required : true
    }
});


const emailVerificationModel = mongoose.model('verifys', emailVerifecationSchema)

module.exports = emailVerificationModel