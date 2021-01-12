"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Response {
    constructor(_ok, _result, _message) {
        this._ok = _ok;
        this._result = _result;
        this._message = _message;
    }
    set ok(ok) {
        this._ok = ok;
    }
    get ok() {
        return this._ok;
    }
    get result() {
        return this._result;
    }
    set result(result) {
        this._result = result;
    }
    get message() {
        return this._message;
    }
    set message(message) {
        this._message = message;
    }
}
exports.default = Response;
