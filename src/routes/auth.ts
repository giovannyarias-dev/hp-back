/*
  PATH api/auth
*/

import { Router, Request, Response } from 'express';
 
const router = Router();

router.get( '/', ( req: Request, res: Response ) => {
  res.json({
    ok: 'esa'
  });
});

export default router;