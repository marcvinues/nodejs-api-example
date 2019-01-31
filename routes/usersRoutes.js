const express = require("express");
const db = require("../models/");
const api = express.Router();
const bcrypt = require('bcrypt-nodejs');
const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');
const config = require('../config');
const mailer = require('../mail/mailing')


api.get("/users", (req, res) => {
  db.User.findAll({}).then((result) => {
    res.json(result)
  })
});

api.post("/confirmation", (req, res)=>{

})

api.get("/users/:id", (req, res) => {
  db.User.findAll({
    where: {
      id: req.params.id
    }
  }).then((result) => {
    res.json(result)
  })
});

api.put("/users/:id", (req, res) => {});

api.delete("/users/:id", (req, res) => {
  db.User.destroy({
    where: {
      id: req.params.id
    }
  }).then((result) => {
    res.json({
      message: 'User deleted'
    })
  })
});

module.exports = api;