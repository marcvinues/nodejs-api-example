const express = require("express");
const db = require("../models/");
const api = express.Router();

api.get("/feed", (req, res)=> {
  db.Feed.findAll({}).then((result)=>{
    res.json(result)
  });
});

api.post("/feed", (req, res)=>{
  db.Feed.create({
    id: req.body.id,
    sportName: req.body.sportName,
    section: req.body.section,
    title: req.body.title,
    source: req.body.source,
    url: req.body.url,
    image: req.body.icon,
    status: req.body.status
  }).then((result)=>{
    res.json({ message: 'feed type was added'});
  });
});

api.get("/feed/:id", (req, res)=>{
  db.Feed.findAll({
    where: {
      id: req.params.id
    }
  }).then((result)=>{
    res.json(result)
  });
});

api.delete("/feed/:id", (req, res)=>{
  db.Feed.findAll({
    where: {
      id: req.params.id
    }
  }).then((result)=>{
    res.json(result)
  });
});

module.exports = api;