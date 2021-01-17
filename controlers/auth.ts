import { response } from 'express';

const login = (req:any, res:any = response) => {


  res.json({
    ok: true,
    msg: 'loggedIn'
  })
};

module.exports = { login };