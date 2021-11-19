const express = require("express");
require("dotenv").config();
const cookieParser = require('cookie-parser');
const app = express();
const server = require('http').createServer(app);
const PORT = process.env.PORT || 3000;
// middleWare
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// api route
app.use('/', require('../routes'))
// 404 page
app.use((req, res, next) => {
    res.status(404).json({
        error: true,
        message: "404 Page not found"
    });
});
server.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});
module.exports = server;