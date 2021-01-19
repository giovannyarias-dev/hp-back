import { response } from 'express';
import { eEvents } from '../enums/eEvents';
import Response from '../models/response';
import User from '../models/user';
import AuditService from '../services/audit-service';
import UserService from '../services/user-service';
const { generarJWT } = require('../helpers/jwt');

export const login = async ( req:any, res:any = response ) => {

  const { uid, name, email, image } = req.body;
  let response = new Response( true );

  const userService = new UserService();
  const auditService = new AuditService();

  try {

    const user = await userService.login( new User( name, email, image, uid ) );
    auditService.saveEvent( user.id, eEvents.LOGGED_IN );

    const token = await generarJWT( user.id, user.name);

    response.res = { user, token };

  } catch ( err: any) {
    response.ok = false;
    response.msg = 'Error guardando el usuario';
    return res.status( 500 ).json({ response })
  }

  return res.status( 201 ).json( response );
};

export const revalidateToken = async ( req:any, res:any = response ) => {

  const token = await generarJWT( req.userId, req.userName );

  return res.status( 200 ).json({
    ok:true,
    token
  });

};
