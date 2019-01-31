const express = require("express");
const db = require("../models/");
const api = express.Router();

api.get("/product_types", (req, res)=>{
  // db.ProductTypes.findAll({}).then((result)=>{
  //   res.json(result)
  // });
  db.sequelize.query("SELECT M.id, PT.market_id, Sub.id as subcategory_id, PT.nameSpanish as Product_Name, Sub.nameSpanish as Subcategory_Name FROM brandeller.ProductTypes as PT, brandeller.Markets as M, brandeller.Subcategories as Sub WHERE M.id = PT.market_id and Sub.id = PT.subcategory_id;")
  .then((result)=>{
    res.json(result[0])
  })
  
});

api.post("/product_types", (req, res)=>{
  db.ProductTypes.create({
    market_id: req.body.market_id,
    subcategory_id: req.body.subcategory_id,
    nameEnglish: req.body.nameEnglish,
    nameSpanish: req.body.nameSpanish,
    image: req.body.image,
    visible: req.body.visible
  }).then((result)=>{
    res.json({ message: 'product type was added'});
  });
});

api.get("/product_types/:id", (req, res)=>{
  db.ProductTypes.findAll({
    where: {
      id: req.params.id
    }
  }).then((result)=>{
    res.json(result)
  });
});

api.put("/product_types/:id", (req, res)=>{});

api.delete("/product_types/:id", (req, res)=>{
  db.ProductTypes.destroy({
    where: {
      id: req.params.id
    }
  }).then((result)=>{
    res.json(result)
  });
});

module.exports = api;
