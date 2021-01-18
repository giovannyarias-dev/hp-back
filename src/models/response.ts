export default class Response {

  constructor(
    private _ok: boolean,  
    private _res?: any,
    private _msg?: string,
  ) {}

  public set ok( ok ) {
    this._ok = ok;
  }

  public get ok() {
    return this._ok;
  }

  public get res() {
    return this._res;
  }

  public set res( result ) {
    this._res = result;
  }

  public get msg() {
    return this._msg;
  }

  public set msg( message ) {
    this._msg = message;
  }

  public toJSON()
  {
    return {
      ok: this._ok, 
      res: this._res, 
      msg: this._msg,
    };
  }
  
}      
