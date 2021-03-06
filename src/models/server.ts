// Express Server
import express = require('express');
const http = require('http');
const socketio = require('socket.io');
const path = require('path');
const cors = require('cors');

const Sockets = require('./sockets');

import auth from '../routes/auth';
import teams from '../routes/teams';

class Server {

    public app: express.Application;
    public port: number;
    public server: any;
    public io: SocketIO.Server;

    constructor() {
        this.app = express();
        this.port = Number(process.env.PORT);
        this.server = http.createServer(this.app);
        this.io = socketio(this.server, {
            cors: {
                origin: process.env.HOST,
                methods: ["GET", "POST"]
            }
        });
    }

    middlewares() {
        this.app.use(cors());

        this.app.use(express.static(path.resolve(__dirname, '../public')));

        this.app.use(express.json());

        this.app.use('/api/auth', auth);
        this.app.use('/api/teams', teams);
    }

    socketsConfiguration() {
        new Sockets(this.io);
    }

    execute() {

        // Middlewares init
        this.middlewares();

        // Sockets init
        this.socketsConfiguration();

        // Server init
        this.server.listen(this.port, () => {
            console.log('Server running in port:', this.port);
        });
    }
}

module.exports = Server;
