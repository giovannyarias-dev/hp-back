"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql = require("mysql");
const eErrors_1 = require("../enums/eErrors");
const util = require('util');
class MySQL {
    constructor() {
        this.connected = false;
        console.log('Clase inicializada');
        this.cnn = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'gio12345',
            database: 'happyproject'
        });
        this.connectDB();
    }
    static get instance() {
        return this._instance || (this._instance = new this());
    }
    static executeQuery(query) {
        return __awaiter(this, void 0, void 0, function* () {
            const pQuery = util.promisify(this.instance.cnn.query).bind(this.instance.cnn);
            return yield pQuery(query).then((res) => {
                return (res);
            }, (err) => {
                console.log(err);
                throw new Error(eErrors_1.eErrors.DB_ERROR);
            });
        });
    }
    connectDB() {
        this.cnn.connect((err) => {
            if (err) {
                console.log(err.message);
                return;
            }
            this.connected = true;
            console.log('Database online');
        });
    }
}
exports.default = MySQL;
