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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = __importDefault(require("../models/user"));
const mysql_1 = __importDefault(require("../mysql/mysql"));
class UserService {
    login(email, name) {
        return __awaiter(this, void 0, void 0, function* () {
            let userInDB = yield this.getUserByEmail(email).then(user => user, err => { throw err; });
            if (userInDB) {
                return userInDB;
            }
            else {
                const newUser = new user_1.default(name, '', email);
                return yield this.saveUser(newUser).then(user => user, err => { throw err; });
            }
        });
    }
    getUserByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const pEmail = mysql_1.default.instance.cnn.escape(email);
            const query = `SELECT * FROM users WHERE email = ${pEmail}`;
            return yield mysql_1.default.executeQuery(query).then(res => {
                if (res.length > 0)
                    return res[0];
            }, err => { throw err; });
        });
    }
    saveUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const email = mysql_1.default.instance.cnn.escape(user.email);
            const name = mysql_1.default.instance.cnn.escape(user.name);
            const query = `INSERT INTO users (email, name) VALUES (${email}, ${name})`;
            return yield mysql_1.default.executeQuery(query).then(res => {
                user.id = res.insertId;
                return user;
            }, err => { throw err; });
        });
    }
}
exports.default = UserService;
