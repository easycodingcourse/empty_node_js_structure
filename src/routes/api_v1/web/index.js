const express = require('express');
var router = express.Router();



//login route
router.use("/login",require('./api/login'));





router.get('/',(req,res,next)=>{
    res.json({
        status:true
    })
})






module.exports = router;