"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_1 = __importDefault(require("../mysql/mysql"));
class AuditService {
    saveEvent(idUser, event) {
        const pIdUser = mysql_1.default.instance.cnn.escape(idUser);
        const pEvent = mysql_1.default.instance.cnn.escape(event);
        const query = `INSERT INTO audits (id_user, event) VALUES (${pIdUser}, ${pEvent})`;
        return mysql_1.default.executeQuery(query).then(res => res, err => { });
    }
}
exports.default = AuditService;
