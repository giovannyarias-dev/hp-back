/*
  PATH api/teams
*/

import { Router} from 'express';
import { teamsByUser } from '../controllers/teams';
const { JwtValidate } =require('../middlewares/jwt-validate');
 
const router = Router();

router.get( '/user', JwtValidate, teamsByUser );

export default router;