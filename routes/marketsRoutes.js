const express = require("express");
const db = require("../models/");
const api = express.Router();
const fs = require('fs');

api.get("/markets", (req, res)=> {
  db.Market.findAll({}).then((result)=>{
    res.json(result)
  });
});

api.post("/uploads",(req, res)=>{
  let uploadFile = req.files.file
  const fileName = req.files.file.name
  uploadFile.mv(
    `./uploads/${fileName}`,
    function (err) {
      if (err) {
        return res.status(500).send(err)
      }
      res.json({
        file: `uploads/${req.files.file.name}`,
      })
    },
  )
});
api.post("/markets", (req, res)=>{
  console.log(req.body)
  db.Market.create({
    nameEnglish: req.body.nameEnglish,
    nameSpanish: req.body.nameSpanish,
    status: req.body.status,
    icon: req.body.icon
  }).then((result)=>{
    res.json({ message: 'market was created'})
  })
})


api.get("/markets/:id", (req, res)=> {
  db.Market.findAll({
    where:{
      id: req.params.id
    }
  }).then((result)=>{
    res.json(result)
  });
});


api.delete("/markets/:id", (req, res) => {
  db.Market.destroy({
    where: {
      id: req.params.id
    }
  }).then((result)=>{
    res.json({ message: 'Market was deleted'})
  })
});

module.exports = api;