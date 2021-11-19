const axios = require("axios").default;
const { getOtp } = require("../utils/utils");

module.exports = {
  sendOtp: async ({ phone }) => {
    const code = getOtp();
    var message = `Your Emedilife verification code is ${code} .This will valid for 4 minutes `;

    const { data } = await axios
      .get("http://api.greenweb.com.bd/api.php", {
        params: {
          token: process.env.BULKSMS_TOKEN,
          to: phone,
          message,
        },
      })
      .catch((error) => console.log(error));

    console.log(data);

    const find = data.search("Ok");
    // const find = data.search("Error");

    return find === 0 ? {
      status: true,
      message: data,
      code
    } : {
      status: false,
      message: data,
    };


  },
};
