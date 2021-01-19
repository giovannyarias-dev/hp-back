const { response, request } = require('express');
const jwto = require('jsonwebtoken');

const JwtValidate = ( req = request, res = response, next:any ) => {

  const token = req.header('x-token');

  if ( !token ) {
    return res.status( 401 ).json({
      ok: false,
      msg: 'No hay token en la petición'
    });
  }

  try {

    const { id, name } =  jwto.verify(
      token,
      process.env.SECRET_JWT_SEED
    )

    req.userId = id;
    req.userName = name;

  } catch ( error ) {
    return res.status( 401 ).json({
      ok: false,
      msg: 'Token no valido'
    });
  }

  next();
}

module.exports = {
  JwtValidate
}