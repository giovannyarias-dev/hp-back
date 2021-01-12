"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Servidor de Express
const express = require("express");
const http = require('http');
const socketio = require('socket.io');
const path = require('path');
const Sockets = require('./sockets');
class Server {
    constructor() {
        this.app = express();
        this.port = Number(process.env.PORT);
        this.server = http.createServer(this.app);
        this.io = socketio(this.server, {
            cors: {
                origin: "http://localhost:3000",
                //origin: "http://happyprojectapp.s3-website.us-east-2.amazonaws.com",
                methods: ["GET", "POST"]
            }
        });
    }
    middlewares() {
        this.app.use(express.static(path.resolve(__dirname, '../public')));
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
