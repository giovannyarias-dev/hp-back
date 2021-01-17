import mysql = require ('mysql');
import { eErrors } from '../enums/eErrors';
const util = require('util');

export default class MySQL {

  private static _instance: MySQL;

  cnn: mysql.Connection;
  connected: boolean = false;

  constructor() {
    console.log('Clase inicializada');

    this.cnn = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'gio12345',
      database: 'happyproject'
    });

    this.connectDB();
  }

  public static get instance(){
    return this._instance || ( this._instance = new this() ) ;
  }

  public static async executeQuery ( query: string ) {
    const pQuery = util.promisify(this.instance.cnn.query).bind(this.instance.cnn);
    return await pQuery( query ).then( ( res:any ) => {
      return( res );
    }, ( err:any ) => {
      console.log(err);
      throw new Error( eErrors.DB_ERROR );
    });
  }

  private connectDB() {
    this.cnn.connect( (err: mysql.MysqlError) => {
      if ( err ) {
        console.log( err.message )
        return;
      }

      this.connected = true;
      console.log('Database online');

    });
  }
}
