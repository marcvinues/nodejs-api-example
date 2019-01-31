const express = require("express");
const api = express.Router();
const Authentication = require('../controllers/authentication');
const passport = require('passport');
const requireAuth = passport.authenticate('jwt', {session: false});
const requireSignin = passport.authenticate('local', {session: false});

api.get('/signin', (req, res)=>{
    res.send("Hola!");
})
api.get('/', requireAuth, function(req, res){
    res.send({hi: 'there'})
});

api.post('/signin', requireSignin, Authentication.signin)

api.post("/signup", Authentication.signup)


module.exports = api;