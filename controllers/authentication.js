const jwt = require('jwt-simple');
const db = require("../models/");
const config = require('../config');
const bcrypt = require('bcrypt-nodejs')

function tokenForUser(user){
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timestamp}, config.secret)
}

exports.signin = function(req, res, next){
  res.send({ token: tokenForUser(req.user)})
}

exports.signup = function (req, res, next) {
  const email = req.body.email;
  const password = req.body.password;
  
  bcrypt.genSalt(10, function (err, salt) {
    if (err) {
      return next(err);
    }
    bcrypt.hash(password, salt, null, (err, hash) => {
    if (err) {
      return res.status(500).json({
        error: err
      })
    } else {
    db.User.create({
      email: email,
      password: hash
    }).then((result) => {
      res.json({ message: 'user created success' })
      }).catch((err)=>{
        console.log("Error 422 usuario en uso")
      })
    }
  })
});

if(!email || !password){
    return res.status(402).send({error: 'Debes poner email y password'})
  }

  db.User.findOne({
    where:{
        email: req.body.email
      }
    }).then(function(user) {
      if(user){
        return res.status(422).send({ error: 'Email está en uso'})
      }else{
        res.json({ token: tokenForUser(req.body.email)});
      }
      console.log('success');
  }).catch(function(err) {
      // print the error details
      console.log(err, req.body.email);
  });

     


}