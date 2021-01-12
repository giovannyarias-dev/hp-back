"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = __importDefault(require("./user"));
class UserList {
    constructor() {
        this._users = [
            new user_1.default('', 'carlos.jpg', 'carlos.pabon@avaldigitallabs.com', 'team'),
            new user_1.default('', 'diana.jpg', 'diana.hernandez@avaldigitallabs.com', 'po'),
            new user_1.default('', 'diego.jpg', 'diego.grajales@avaldigitallabs.com', 'team'),
            new user_1.default('', 'gio.jpg', 'cesarg.arias@avaldigitallabs.com', 'team'),
            new user_1.default('', 'jesus.png', 'jesus.rincon@avaldigitallabs.com', 'team'),
            new user_1.default('', 'joana.jpg', 'joana.garcia@avaldigitallabs.com', 'team'),
            new user_1.default('', 'leidy.jpg', 'leidy.sanabria@avaldigitallabs.com', 'team'),
            new user_1.default('', 'lucho.jpg', 'luis.castellanos@avaldigitallabs.com', 'team'),
            new user_1.default('', 'freddy.jpg', 'freddy.bohorquez@avaldigitallabs.com', 'scrum'),
            new user_1.default('', 'gio.jpg', 'giovannyarias.glab@gmail.com', 'scrum')
        ];
        this._usersOnPlanning = new Array();
    }
    addUserToPlanning(user) {
        if (!this._usersOnPlanning.some(userOn => userOn.email === user.email)
            && this._users.some(userOn => userOn.email === user.email)) {
            const newUser = this._users.filter(userFilter => userFilter.email === user.email)[0];
            user.role = newUser.role;
            user.image = newUser.image;
            this._usersOnPlanning.push(user);
        }
        return this._usersOnPlanning;
    }
    setEffort(email, effort) {
        this._usersOnPlanning = this._usersOnPlanning.map((user) => {
            if (user.email === email) {
                user.effort = effort;
            }
            return user;
        });
        return this._usersOnPlanning;
    }
    cleanEffort() {
        this._usersOnPlanning = this._usersOnPlanning.map((user) => {
            user.effort = null;
            return user;
        });
    }
    get users() {
        return this._users;
    }
    get usersOnPlanning() {
        return this._usersOnPlanning;
    }
}
exports.default = UserList;
