const server = require('./server');

var connectedUsers = [];

module.exports = () => {

    const io = require('socket.io')(server);
    console.log("socket add to server");

    io.on('connection', socket => {
        connectedUsers.push({
            socketId:socket.id,
            type:'global'
        })
        console.log("user connect => "+socket.id);
    });

  return io;
};




module.exports.totalConnectedUser = () => connectedUsers.length;