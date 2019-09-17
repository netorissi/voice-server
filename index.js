const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);

app.set('port', 5000);

io.sockets.on('connection', socket => {
    
    console.log('listening sockets ...');

    socket.emit('CONNECTED', { text: 'server send a message' });
    socket.on('MOSCANDO_VOICE', () => io.sockets.emit('MOSCANDO'));
    socket.on('OI_VOICE', () => io.sockets.emit('OI'));
    socket.on('FALA_VOICE', () => io.sockets.emit('FALA'));
    socket.on('DANCA_VOICE', () => io.sockets.emit('DANCA'));
    socket.on('LUTA_VOICE', () => io.sockets.emit('LUTA'));
    socket.on('PULA_VOICE', () => io.sockets.emit('PULA'));
    socket.on('YEAH_VOICE', () => io.sockets.emit('YEAH'));
});

server.listen(app.get('port'), () => console.log('start server in: ' + app.get('port')));
