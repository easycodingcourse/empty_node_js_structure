const express = require('express');
var router = express.Router();



router.use('/admin',require('./admin'))
router.use('/app',require('./app'))
router.use('/web',require('./web'))




module.exports = router;