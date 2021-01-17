import MySQL from "./src/mysql/mysql";

const Server = require('./src/models/server');
require('dotenv').config();

const server = new Server();

server.execute();
