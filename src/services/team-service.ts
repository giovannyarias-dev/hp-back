import MySQL from '../mysql/mysql';

export default class TeamService {

  public async getTeamsByUser( idUser: number ) {
    const pIdUser = MySQL.instance.cnn.escape(idUser);
    const query = `SELECT t.id, t.name, tu.roles 
      FROM 
        team_users tu
      INNER JOIN    
        teams t ON (t.id = tu.id_team)
      WHERE 
        id_user=${ idUser }`;

    return await MySQL.executeQuery( query ).then( res => res, err => { throw err });
  }


}