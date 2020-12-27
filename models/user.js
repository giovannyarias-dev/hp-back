const { v4: uuidv4 } = require('uuid');

class User {

    constructor(name, image, role, effort, email) {
        this.id = uuidv4();
        this.name = name;
        this.image = image;
        this.effort = effort;
        this.invited = false;
        this.role = role;
        this.email = email;
    }

}

module.exports = User;
