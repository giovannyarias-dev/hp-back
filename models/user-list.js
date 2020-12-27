const User = require('./user');

class UserList {

    constructor() {
        this.users = [
            new User('Carlos', 'carlos.jpg', 'team', null, 'carlos.pabon@avaldigitallabs.com'),
            new User('Diana', 'diana.jpg', 'po', null, 'diana.hernandez@avaldigitallabs.com'),
            new User('Diego', 'diego.jpg', 'team', null, 'diego.grajales@avaldigitallabs.com'),
            new User('Gio', 'gio.jpg', 'team', null, 'cesarg.arias@avaldigitallabs.com'),
            new User('Jesús', 'jesus.png', 'team', null, 'jesus.rincon@avaldigitallabs.com'),
            new User('Joana', 'joana.jpg', 'team', null, 'joana.garcia@avaldigitallabs.com'),
            new User('Leidy', 'leidy.jpg', 'team', null, 'leidy.sanabria@avaldigitallabs.com'),
            new User('Lucho', 'lucho.jpg', 'team', null, 'luis.castellanos@avaldigitallabs.com'),
            new User('Freddy', 'freddy.jpg', 'scrum', null, 'freddy.bohorquez@avaldigitallabs.com'),
            new User('GioGlab', 'gio.jpg', 'scrum', null, 'giovannyarias.glab@gmail.com')
        ];
        this.usersOnPlanning = [];
    }

    addUser( email ) {
        if (!this.usersOnPlanning.some(user => user.email === email)
            && this.users.some(user => user.email === email)) {
            const newUser = this.users.filter( user => user.email === email)[0];
            this.usersOnPlanning.push( newUser );
        }
        return this.usersOnPlanning;
    }

    setEffort(email, effort) {
        this.usersOnPlanning = this.usersOnPlanning.map((user) => {
            if (user.email === email) {
                user.effort = effort;
            }
            return user;
        });
        return this.usersOnPlanning;
    }

    cleanEffort() {
        this.usersOnPlanning = this.usersOnPlanning.map((user) => {
            user.effort = null;
            return user;
        })
    }

    getUsers() {
        return this.users;
    }

    getUsersOnPlanning() {
        return this.usersOnPlanning;
    }

}

module.exports = UserList;
