export default class Response {

  constructor(
    private _ok: boolean,  
    private _result: any,
    private _message?: string,
  ) {}

  public set ok( ok ) {
    this._ok = ok;
  }

  public get ok() {
    return this._ok;
  }

  public get result() {
    return this._result;
  }

  public set result( result ) {
    this._result = result;
  }

  public get message() {
    return this._message;
  }

  public set message( message ) {
    this._message = message;
  }
  
}      
