const { v4: uuidv4 } = require('uuid');

export default class User {

  constructor(
    private _name: string , 
    private _image: string, 
    private _email: string,
    private _role?: string | null | undefined, 
    private _effort?: string | null | undefined,
    private _id: string = uuidv4()
  ) {}

  public set id(id: string) {
    this._id = id;
  }

  public get id() {
    return this._id;
  }

  public get name() {
    return this._name;
  }

  public set image(image: string) {
    this._image = image;
  }

  public get image() {
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

  public static convert(userObj: any):User {
    return new this(
      userObj.name,
      userObj.image,
      userObj.email
    );
  }

  public toJSON()
  {
    return {
      name: this.name, 
      image: this.image, 
      email: this.email,
      role: this.role, 
      effort: this.effort,
      id: this.id
    };
  }
  
}
