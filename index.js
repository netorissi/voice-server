const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);

app.set('port', 5000);

io.sockets.on('connection', socket => {
    
    console.log('listening sockets ...');

    socket.emit('CONNECTED', { text: 'server send a message' });
    socket.on('FALA', number => io.sockets.emit(`FALA${number}`));
    socket.on('INATIVO', number => io.sockets.emit(`INATIVO${number}`));
    socket.on('OI', number => io.sockets.emit(`OI${number}`));
    socket.on('NAO', () => io.sockets.emit('NAO'));
    socket.on('BEIJO', () => io.sockets.emit('BEIJO'));
    socket.on('APRENDER', () => io.sockets.emit('APRENDER'));
    socket.on('SEILA', () => io.sockets.emit('SEILA'));
    socket.on('ARQUIVO', () => io.sockets.emit('ARQUIVO'));
    socket.on('PREVISAO', () => io.sockets.emit('PREVISAO'));
    socket.on('POSE', () => io.sockets.emit('POSE'));
    socket.on('PULAR', () => io.sockets.emit('PULAR'));
    socket.on('REZAR', () => io.sockets.emit('REZAR'));
    socket.on('CORRER', () => io.sockets.emit('CORRER'));
    socket.on('EXERCICIO', () => io.sockets.emit('EXERCICIO'));
    socket.on('HIPHOP', () => io.sockets.emit('HIPHOP'));
    socket.on('SAMBA', () => io.sockets.emit('SAMBA'));
    socket.on('FUNK', () => io.sockets.emit('FUNK'));
    socket.on('MACARENA', () => io.sockets.emit('MACARENA'));
    socket.on('ELETRONICO', () => io.sockets.emit('ELETRONICO'));
});

server.listen(app.get('port'), () => console.log('start server in: ' + app.get('port')));
