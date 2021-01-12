import User from './user';

export default class UserList {

    private _users: User[];
    private _usersOnPlanning: User[];

    constructor() {
        this._users = [
            new User('', 'carlos.jpg', 'carlos.pabon@avaldigitallabs.com', 'team'),
            new User('', 'diana.jpg', 'diana.hernandez@avaldigitallabs.com', 'po'),
            new User('', 'diego.jpg', 'diego.grajales@avaldigitallabs.com', 'team'),
            new User('', 'gio.jpg', 'cesarg.arias@avaldigitallabs.com', 'team'),
            new User('', 'jesus.png', 'jesus.rincon@avaldigitallabs.com', 'team'),
            new User('', 'joana.jpg', 'joana.garcia@avaldigitallabs.com', 'team'),
            new User('', 'leidy.jpg', 'leidy.sanabria@avaldigitallabs.com', 'team'),
            new User('', 'lucho.jpg', 'luis.castellanos@avaldigitallabs.com', 'team'),
            new User('', 'freddy.jpg', 'freddy.bohorquez@avaldigitallabs.com', 'scrum'),
            new User('', 'gio.jpg', 'giovannyarias.glab@gmail.com', 'scrum')
        ];
        this._usersOnPlanning = new Array<User>();
    }

    public addUserToPlanning( user: User ) {
        if (!this._usersOnPlanning.some( userOn => userOn.email === user.email)
                && this._users.some(userOn => userOn.email === user.email)) {
            const newUser = this._users.filter( userFilter => userFilter.email === user.email)[0];
            user.role = newUser.role;
            user.image = newUser.image;
            this._usersOnPlanning.push( user );
        }
        return this._usersOnPlanning;
    }

    public setEffort(email: string, effort: string) {
        this._usersOnPlanning = this._usersOnPlanning.map((user: User) => {
            if (user.email === email) {
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

    public get users() {
        return this._users;
    }

    public get usersOnPlanning() {
        return this._usersOnPlanning;
    }

}
