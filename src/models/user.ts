const { v4: uuidv4 } = require('uuid');

export default class User {

  constructor(
    private _name: string, 
    private _email: string,
    private _role: string | null | undefined = '', 
    private _effort?: string | null | undefined,
    private _image?: string, 
    private _uid?: string,
    private _id?: string | undefined,
    private _enabled:number = 1
  ) {}

  public set id(id: string | undefined) {
    this._id = id;
  }

  public get id(): string | undefined {
    return this._id;
  }

  public get name() {
    return this._name;
  }

  public set image(image: string | undefined) {
    this._image = image;
  }

  public get image(): string | undefined {
    return this._image;
  }

  public get email() {
    return this._email;
  }

  public set role(role: string | null | undefined) {
    this._role = role;
  }

  public get role() {
    return this._role;
  }

  public get effort() : string | null | undefined {
    return this._effort;
  }

  public set effort(effort: string | null | undefined ) {
    this._effort = effort;
  }

  public set uid( uid: string | undefined) {
    this._uid = uid;
  }

  public get uid() {
    return this._uid;
  }

  public set enabled( enabled: number) {
    this._enabled = enabled;
  }

  public get enabled() {
    return this._enabled;
  }

  public toJSON()
  {
    return {
      name: this.name, 
      email: this.email,
      role: this.role, 
      effort: this.effort,
      image: this.image, 
      uid: this._uid,
      id: this.id,
      enabled: this._enabled
    };
  }
  
}
