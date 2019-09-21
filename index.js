const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);

app.set('port', 5000);

io.sockets.on('connection', socket => {
    
    console.log('listening sockets ...');

    socket.emit('CONNECTED', { text: 'server send a message' });
    socket.on('FALA_VOICE1', () => io.sockets.emit('FALA1'));
    socket.on('DANCA_VOICE', () => io.sockets.emit('DANCE'));
    socket.on('ROTATE_VOICE', () => io.sockets.emit('ROTATE'));
    socket.on('PULA_VOICE', () => io.sockets.emit('JUMP'));
});

server.listen(app.get('port'), () => console.log('start server in: ' + app.get('port')));
