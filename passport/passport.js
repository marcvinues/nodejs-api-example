const passport = require('passport');
const db = require("../models/");
const config = require('../config')
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const LocalStrategy = require('passport-local');
const bcrypt = require('bcrypt-nodejs');
const jwt = require('jsonwebtoken');

//local strategy
const localOptions = {usernameField: 'email'}
const localLogin = new LocalStrategy(localOptions, function(email, password, done){

  //verificar email and pw
  db.User.findOne({ 
    where: {
      email: email
    }
     }).then((user)=>{
      if(!user){ return done(null, false); }
      //comparar passwords
        if(user){
          if(bcrypt.compareSync(password, user.password)){
              const token = jwt.sign({
                  id: user.id,
                  email: user.email
              }, config.secret)
              //res.json({token})
              return done(null, user);
          }
        }
     }).catch((err)=>{
      if(err){ return done(err); }
     })
     
  

})

//setup options jwt
const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: config.secret
};

const jwtLogin = new JwtStrategy(jwtOptions, function(payload, done){
  // see if the user in the payload exist

  db.User.findById(payload.sub, function(err, user){
    if(err) {return done(err, false);}

    if(user){
      done(null, user);
    } else{
      done(null, false);
    }

  });
});

passport.use(jwtLogin);
passport.use(localLogin);