const express = require("express");
const db = require("../models/");
const api = express.Router();

api.get("/subcategories", (req, res)=>{
  db.Subcategories.findAll({}).then((result)=>{
    res.json(result)
  })
});

api.post("/subcategories", (req, res)=>{
  db.Subcategories.create({
    market_id: req.body.market_id,
    nameEnglish: req.body.nameEnglish,
    nameSpanish: req.body.nameSpanish,
    image: req.body.image,
    status: req.body.status
  }).then((result)=>{
    res.json({ message: 'subcategory was added'});
  });
});

api.get("/subcategories/:id", (req, res)=>{
  db.Subcategories.findAll({
    where: {
      id: req.params.id
    }
  }).then((result)=>{
    res.json(result)
  });
});

api.put("/subcategories/:id", (req, res)=>{});

api.delete("/subcategories/:id", (req, res)=>{
  db.Subcategories.destroy({
    where: {
      id: req.params.id
    }
  }).then((result)=>{
    res.json(result)
  });
});

module.exports = api;
