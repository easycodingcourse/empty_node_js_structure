const express = require('express');
var router = express.Router();



router.get('/',(req,res,next)=>{
    res.json({
        status:true
    })
})



module.exports = router;