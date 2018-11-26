const passport = require('passport');
const router = require('express').Router();

router.get(
  '/',  // user req toss
  passport.authenticate('google', { scope: ['profile','email'] })  // middelware func
);

router.get(
  '/callback',  //req + code => google => Real user data
  passport.authenticate('google') // can not get 
);

module.exports = router;