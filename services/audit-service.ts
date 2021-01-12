import MySQL from '../mysql/mysql';

export default class AuditService {

  public saveEvent(idUser: number, event: string) {
    const pIdUser = MySQL.instance.cnn.escape(idUser);
    const pEvent = MySQL.instance.cnn.escape(event);
    const query:string = `INSERT INTO audits (id_user, event) VALUES (${ pIdUser }, ${ pEvent })`;
    return MySQL.executeQuery( query ).then( res => res, err => {});
  }

}
