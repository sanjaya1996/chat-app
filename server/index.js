const express = require('express');
const socketIo = require('socket.io');
const http = require('http');

const router = require('./routes/router');

const PORT = process.env.PORT || 5000;

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(router);

server.listen(PORT, () => console.log(`Server Listening on Port ${PORT}`));
