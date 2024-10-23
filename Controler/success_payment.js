const success_payment = (req, res)=>{
    const success_date = req.body;
    console.log(success_date)
    res.redirect('http://localhost:3000/payment-success')
}

module.exports = success_payment