import User from './user';

export default class UserList {

    private _users: User[];
    private _usersOnPlanning: any[];

    constructor() {
        this._users = [
            new User('Carlos', 'carlos.pabon@avaldigitallabs.com', 'team'),
            new User('Diana', 'diana.hernandez@avaldigitallabs.com', 'po'),
            new User('Diego', 'diego.grajales@avaldigitallabs.com', 'team'),
            new User('Gio', 'cesarg.arias@avaldigitallabs.com', 'team'),
            new User('Jesus', 'jesus.rincon@avaldigitallabs.com', 'team'),
            new User('Joana', 'joana.garcia@avaldigitallabs.com', 'team'),
            new User('Leidy', 'leidy.sanabria@avaldigitallabs.com', 'team'),
            new User('Lucho', 'luis.castellanos@avaldigitallabs.com', 'team'),
            new User('Freddy', 'freddy.bohorquez@avaldigitallabs.com', 'scrum'),
            new User('Gio', 'giovannyarias.glab@gmail.com', 'team')
        ];
        this._usersOnPlanning = new Array();
    }

    public addUserToPlanning( user: any ) {
        if (!this._usersOnPlanning.some( userOn => userOn.id === user.id)
                && this._users.some(userOn => userOn.email === user.email)) {

            const newUser = this._users.filter( userFilter => userFilter.email === user.email)[0];

            this._usersOnPlanning.push({
                id: user.id,
                name: user.name,
                image: user.image,
                role: newUser.role,
                effort: ''
            });
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
