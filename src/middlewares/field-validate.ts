import { response } from 'express';
import { validationResult } from 'express-validator';

export const fieldValidate = ( req: any, res = response, next: any ) => {

  const errors = validationResult( req );

  if ( !errors.isEmpty() ) {
    return res.status(400).json({
      ok: false,
      err: errors.mapped()
    })
  }

  next();

}