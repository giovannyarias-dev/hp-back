import { eEvents } from '../enums/eEvents';
import AuditService from '../services/audit-service';
import UserService from '../services/user-service';
import User from './user';
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

      this.io.emit('current-users', this.userList.usersOnPlanning);
      if ( this.revealCards ) {
        socket.emit('reveal-cards', { reveal: true });
      }

      socket.on('login', (data) => {
        /*const userService = new UserService();
        const auditService = new AuditService();
        userService.login(data._email, data._name).then( user => {
          auditService.saveEvent( user.id, eEvents.LOGGED_IN );
          this.userList.addUserToPlanning( User.convert( user ) );
          this.io.emit('current-users', this.userList.usersOnPlanning);
        }, err => {
          console.log('entra al error final');
        });*/
      });

      socket.on('logout', (data) => {
        console.log('Eliminar usuario de lista');
      });

      socket.on('select-user', (data) => {
        /*const userService = new UserService();
        
        userService.login(data.email, data.name).then( user => {
          this.userList.addUserToPlanning( User.convert( user ) );
          this.io.emit('current-users', this.userList.usersOnPlanning);
        }, err => {});*/

      });

      socket.on('set-effort', (data) => {
        this.userList.setEffort(data.email, data.effort);
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
