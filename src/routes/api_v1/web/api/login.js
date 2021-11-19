const express = require("express");
var router = express.Router();
const { checkPhonenumber, getOtp } = require("../../../../utils/utils");
const Users = require("../../../../db/models").users;

const axios = require("axios").default;
const bulkSms = require('../../../../lib/bulkSms')

router.post("/", async (req, res, next) => {
  const { phone } = req.body;

  const otpResponse = await bulkSms.sendOtp({phone})


//   opt message not send & give a error message 
  if(!otpResponse.status){
    return res.status(200).json({
        status:false,
        message:otpResponse.message
    })
  }




  
  



  




  //   const user = await Users.findOne({ where: { phoneNumber: phone } });

  //   if (!user) {
  //   }

  //   res.json({
  //     status: true,
  //     phone:phone
  //   });
});

module.exports = router;
