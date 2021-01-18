/*
  PATH api/auth
*/

import { Router} from 'express';
import { check } from 'express-validator';
import { login } from '../controllers/auth';
import { fieldValidate } from '../middlewares/field-validate';
 
const router = Router();

router.post( 
  '/', 
  [ 
    check( 'uid', 'El uid es obligatorio' ).not().isEmpty(),
    check( 'name', 'El nombre es obligatorio' ).not().isEmpty(),
    check( 'email', 'El email es obligatorio' ).isEmail(),
    check( 'image', 'La imagen es obligatoria' ).not().isEmpty(),
    fieldValidate
  ],
  login
);

export default router;