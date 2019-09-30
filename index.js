const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);

app.set('port', 5000);

io.sockets.on('connection', socket => {
    
    console.log('listening sockets ...');

    socket.emit('CONNECTED', { text: 'server send a message' });
    socket.on('VOICE', number => {
        console.log("SERVER NUMBER: " + JSON.stringify(number))
        io.sockets.emit('VOICE', number)
    });
    socket.on('IDDLE', number => io.sockets.emit('IDDLE', number));
});

server.listen(app.get('port'), () => console.log('start server in: ' + app.get('port')));
