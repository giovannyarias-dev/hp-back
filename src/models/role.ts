export default class Role {

  constructor(
    private _id: number, 
    private _name: string
  ) {}

  public set id(id: number) {
    this._id = id;
  }

  public get id(): number{
    return this._id;
  }

  public set name(id: string) {
    this._name = id;
  }

  public get name(): string{
    return this._name;
  }

  public toJSON()
  {
    return {
      id: this.id, 
      name: this.name
    };
  }

}