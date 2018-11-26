const express = require('express');  // 외부 모듈
const mongoose = require('mongoose');
const config = require('config');
const cookieSession = require('cookie-session');
const passport = require('passport');

require('./services/passport');  //서비스들

const home = require('./routes/home');  //라우터들
const auth = require('./routes/auth'); 
const users = require('./routes/users');


const app = express();

mongoose.connect(config.DB.mongoURI, { useNewUrlParser:true })
  .then(()=> console.log(`Connected to MongoDB`))
  .catch((error)=> console.error(error.message));

// NPM middleware
app.use(
  cookieSession({ // req.session == user.id
    name: 'MERN cookie',
    maxAge: (30*24*60*60*1000),
    keys: [config.cookieKey]  //master key
  })
);
app.use(passport.initialize());
app.use(passport.session()); // req.user == <USER INSTANCE>

// Routes
app.use(home);
app.use('/auth/google',auth);
app.use('/users',users);


// passport.js로 분리

// home.js로 분리
// auth.js로 분리

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));