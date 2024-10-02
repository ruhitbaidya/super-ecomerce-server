
const mongoose = require('mongoose');


const registerSchema = new mongoose.Schema({
    fullName: {
        type : String,
        required : true
    },
    gender: {
        type : String,
        required : true
    },
    dob: {
        type : String,
        required : true
    },
    email: {
        type : String,
        required : true
    },
    phone: {
        type : String,
        required : true
    },
    password: {
        type : String,
        required : true
    },
    cityName: {
        type : String,
        required : true
    },
    district: {
        type : String,
        required : true
    },
    zipCode: {
        type : String,
        required : true
    },
    acActive : {
        type : Boolean,
        required : true
    }
}, {timestamps : true})


const registerModel = mongoose.model('users', registerSchema)

module.exports = registerModel;

