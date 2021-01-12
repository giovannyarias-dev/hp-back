"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Server = require('./models/server');
require('dotenv').config();
const server = new Server();
server.execute();
