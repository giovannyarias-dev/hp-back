import UserList from './user-list';

class Sockets {

  private io: SocketIO.Server;
  private userList: UserList;
  private revealCards: boolean;

  constructor( io: SocketIO.Server ) {

    this.io = io;
    this.userList = new UserList();
    this.revealCards = false;

    this.socketEvents();
  }

  socketEvents() {

    this.io.on('connection', (socket) => {

      console.log('Connected Client');

      if ( this.revealCards ) {
        socket.emit('reveal-cards', { reveal: true });
      }

      socket.on('add-user-planning', (data) => {
        this.userList.addUserToPlanning( data.user, data.isTeamUser );
        this.io.emit('current-users', this.userList.usersOnPlanning);
      });

      socket.on('remove-user-planning', (data) => {
        this.userList.removeUserPlanning( data.idUser );
        this.io.emit('current-users', this.userList.usersOnPlanning);
      });

      socket.on('set-effort', (data) => {
        this.userList.setEffort(data.idUser, data.effort);
        this.io.emit('current-users', this.userList.usersOnPlanning);
      });

      socket.on('clean-effort', (data) => {
        this.revealCards = false;
        this.userList.cleanEffort();
        this.io.emit('reveal-cards', { reveal: false });
        this.io.emit('current-users', this.userList.usersOnPlanning);
      });

      socket.on('reveal-cards', (data) => {
        this.revealCards = true;
        this.io.emit('reveal-cards', { reveal: true });
      });
    });
  }
}

module.exports = Sockets;
