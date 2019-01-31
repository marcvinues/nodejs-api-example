const express = require("express");
const db = require("../models/");
const api = express.Router();

api.get("/brands", (req, res)=> {
  db.Brands.findAll({}).then((result)=>{
    res.json(result)
  });
});

api.post("/brands", (req, res)=>{
  db.Brands.create({
    id: req.body.id,
    brandName: req.body.brandName,
    background: req.body.background,
    icon: req.body.icon,
    status: req.body.status
  }).then((result)=>{
    res.json({ message: 'product type was added'});
  });
});

api.get("/brands/:id", (req, res)=>{
  db.Brands.findAll({
    where: {
      id: req.params.id
    }
  }).then((result)=>{
    res.json(result)
  });
});

api.delete("/brands/:id", (req, res)=>{
  db.Brands.findAll({
    where: {
      id: req.params.id
    }
  }).then((result)=>{
    res.json(result)
  });
});

module.exports = api;