const http = require('http');
const app = require('./app');
const { Server } = require('socket.io'); //import

const port = process.env.PORT || 5005;

const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST']
    }
});

io.on('connection', (socket) => { 
    console.log(`A user connected: ${socket.id}`);

    socket.on('disconnect', () => {
        console.log(`A user disconnected: ${socket.id}`);
    });
});

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

module.exports = { app, io }; 