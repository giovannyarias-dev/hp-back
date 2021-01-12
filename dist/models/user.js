"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { v4: uuidv4 } = require('uuid');
class User {
    constructor(_name, _image, _email, _role, _effort, _id = uuidv4()) {
        this._name = _name;
        this._image = _image;
        this._email = _email;
        this._role = _role;
        this._effort = _effort;
        this._id = _id;
    }
    set id(id) {
        this._id = id;
    }
    get id() {
        return this._id;
    }
    get name() {
        return this._name;
    }
    set image(image) {
        this._image = image;
    }
    get image() {
        return this._image;
    }
    get email() {
        return this._email;
    }
    set role(role) {
        this._role = role;
    }
    get role() {
        return this._role;
    }
    get effort() {
        return this._effort;
    }
    set effort(effort) {
        this._effort = effort;
    }
    static convert(userObj) {
        return new this(userObj.name, userObj.image, userObj.email);
    }
}
exports.default = User;
