import { response } from 'express';
import Response from '../models/response';
import TeamService from '../services/team-service';

export const teamsByUser = async ( req:any, res:any = response ) => {

  const { userId } = req;
  let response = new Response( true );

  const teamService = new TeamService();

  try {

    const teams = await teamService.getTeamsByUser( userId);
    response.res = teams;

  } catch ( err: any) {
    response.ok = false;
    response.msg = 'Error obteniendo los equipos del usuario';
    return res.status( 500 ).json({ response })
  }

  return res.status( 201 ).json( response );
};
