const emailVerificationModel = require("../model/emailVerfication");
const registerModel = require("../model/register.model");


const verifyOtpUser = async(req, res)=>{
    console.log(req.body)
    const {email, otpCode} = req.body;
    try{
        const findUser = await emailVerificationModel.findOne({email});
        console.log(findUser)
        if(findUser.otpCode === otpCode){
            const result = await registerModel.updateOne({email}, {acActive : true})
            const delOtp = await emailVerificationModel.deleteOne({email})
            console.log('success fully match', delOtp)
            if(result.acknowledged){
                res.send({message: "SuccessFully"})
            }else{
                res.send({message: "Sorry Did Not Match"})
            }
        }else{
            res.send({success : false, message : 'Your OPT Not Match'})
        }
    }   
    catch(err){
        res.send({message: err.message})
    }
}

module.exports = verifyOtpUser