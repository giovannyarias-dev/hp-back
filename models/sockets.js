const UserList = require('./user-list');

class Sockets {

  constructor(io) {

    this.io = io;
    this.userList = new UserList();
    this.revealCards = false;

    this.socketEvents();
  }

  socketEvents() {

    this.io.on('connection', (socket) => {

      console.log('Connected Client');
      this.io.emit('current-users', this.userList.getUsersOnPlanning());
      if ( this.revealCards ) {
        socket.emit('reveal-cards', { reveal: true });
      }

      socket.on('select-user', (data) => {
        this.userList.addUser(data.email);
        this.io.emit('current-users', this.userList.getUsersOnPlanning());
      });

      socket.on('set-effort', (data) => {
        this.userList.setEffort(data.email, data.effort);
        this.io.emit('current-users', this.userList.getUsersOnPlanning());
      });

      socket.on('clean-effort', (data) => {
        this.revealCards = false;
        this.userList.cleanEffort();
        this.io.emit('reveal-cards', { reveal: false });
        this.io.emit('current-users', this.userList.getUsersOnPlanning());
      });

      socket.on('reveal-cards', (data) => {
        this.revealCards = true;
        this.io.emit('reveal-cards', { reveal: true });
      });
    });
  }
}

module.exports = Sockets;
