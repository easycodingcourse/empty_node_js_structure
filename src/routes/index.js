const express = require('express');
var router = express.Router();



router.use('/api/v1',require('./api_v1'))




router.get('/',(req,res,next)=>{
    res.json({
        status:true,
        message:"welcome to emedilife api"
    })
})



module.exports = router;