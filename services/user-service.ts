import { eErrors } from '../enums/eErrors';
import Response from '../models/response';
import User from '../models/user';
import MySQL from '../mysql/mysql';

export default class UserService {

  public async login(email: string, name: string) {

    let userInDB = await this.getUserByEmail( email ).then( user => user, err => { throw err });

    if( userInDB ) {
      return userInDB;
    } else {
      const newUser = new User(name, '', email);
      return await this.saveUser( newUser ).then( user => user, err => { throw err });
    }
  }

  public async getUserByEmail( email: string ) {
    const pEmail = MySQL.instance.cnn.escape(email);
    const query = `SELECT * FROM users WHERE email = ${ pEmail }`;

    return await MySQL.executeQuery( query ).then( res => {
      if(res.length > 0)
        return res[0];
    }, err => { throw err });
  }

  private async saveUser( user: User ) {
    const email = MySQL.instance.cnn.escape(user.email);
    const name = MySQL.instance.cnn.escape(user.name);
    const query:string = `INSERT INTO users (email, name) VALUES (${ email }, ${ name })`;

    return await MySQL.executeQuery( query ).then( res => {
      user.id = res.insertId;
      return user;
    }, err => { throw err });
  }

}
