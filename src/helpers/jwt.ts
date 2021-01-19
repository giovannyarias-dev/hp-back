const jwt = require('jsonwebtoken');

const generarJWT = ( id:string, name:string) => {

  return new Promise( ( resolve, reject ) => {

    const payload = { id, name };

    jwt.sign( payload, process.env.SECRET_JWT_SEED, {
      expiresIn: '2h'
    }, ( err:any, token:any ) => {

      if ( err ){
        console.log( err );
        reject('No se pudo generar el token');
      }

      resolve( token );

    })

  })

}

module.exports = {
  generarJWT
}
