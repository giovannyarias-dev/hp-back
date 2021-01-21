import User from './user';

export default class UserList {

    private _usersOnPlanning: any[];
 
    constructor() {
        this._usersOnPlanning = new Array();
    }

    public addUserToPlanning( user:any, isTeamUser:boolean ) {
        if ( !this._usersOnPlanning.some( userOn => userOn.id === user.id) ) {
            this._usersOnPlanning.push({
                id: user.id,
                name: user.name,
                image: user.image,
                effort: '',
                isTeamUser
            });
        }
        return this._usersOnPlanning;
    }

    public removeUserPlanning( idUser:number ) {
        this._usersOnPlanning = this._usersOnPlanning.filter( user => user.id !== idUser);
    }

    public setEffort(idUser: number, effort: string) {
        this._usersOnPlanning = this._usersOnPlanning.map((user: User) => {
            if (user.id === idUser) {
                user.effort = effort;
            }
            return user;
        });
        return this._usersOnPlanning;
    }

    public cleanEffort() {
        this._usersOnPlanning = this._usersOnPlanning.map((user: User) => {
            user.effort = null;
            return user;
        })
    }

    public get usersOnPlanning() {
        return this._usersOnPlanning;
    }

}
