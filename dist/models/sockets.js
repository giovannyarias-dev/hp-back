"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const eEvents_1 = require("../enums/eEvents");
const audit_service_1 = __importDefault(require("../services/audit-service"));
const user_service_1 = __importDefault(require("../services/user-service"));
const user_1 = __importDefault(require("./user"));
const user_list_1 = __importDefault(require("./user-list"));
class Sockets {
    constructor(io) {
        this.io = io;
        this.userList = new user_list_1.default();
        this.revealCards = false;
        this.socketEvents();
    }
    socketEvents() {
        this.io.on('connection', (socket) => {
            console.log('Connected Client');
            this.io.emit('current-users', this.userList.usersOnPlanning);
            if (this.revealCards) {
                socket.emit('reveal-cards', { reveal: true });
            }
            console.log('curret-users', this.userList.usersOnPlanning);
            socket.on('login', (data) => {
                const userService = new user_service_1.default();
                const auditService = new audit_service_1.default();
                userService.login(data._email, data._name).then(user => {
                    auditService.saveEvent(user.id, eEvents_1.eEvents.LOGGED_IN);
                    this.userList.addUserToPlanning(user_1.default.convert(user));
                    this.io.emit('current-users', this.userList.usersOnPlanning);
                }, err => {
                    console.log('entra al error final');
                });
            });
            socket.on('logout', (data) => {
                console.log('Eliminar usuario de lista');
            });
            socket.on('select-user', (data) => {
                const userService = new user_service_1.default();
                userService.login(data.email, data.name).then(user => {
                    this.userList.addUserToPlanning(user_1.default.convert(user));
                    this.io.emit('current-users', this.userList.usersOnPlanning);
                }, err => { });
            });
            socket.on('set-effort', (data) => {
                this.userList.setEffort(data.email, data.effort);
                this.io.emit('current-users', this.userList.usersOnPlanning);
            });
            socket.on('clean-effort', (data) => {
                this.revealCards = false;
                this.userList.cleanEffort();
                this.io.emit('reveal-cards', { reveal: false });
                this.io.emit('current-users', this.userList.usersOnPlanning);
            });
            socket.on('reveal-cards', (data) => {
                this.revealCards = true;
                this.io.emit('reveal-cards', { reveal: true });
            });
        });
    }
}
module.exports = Sockets;
