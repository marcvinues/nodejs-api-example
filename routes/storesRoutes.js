const express = require("express");
const db = require("../models/");
const apiStores = express.Router();

apiStores.get("/stores", (req, res) => {
  db.Store.findAll({}).then((result)=>{
    res.json(result)
  })
});
  
  apiStores.post("/stores", (req, res) => {
    db.Store.create({
      storeName: req.body.storeName,
      latitude: req.body.latitude,
      longitude: req.body.longitude,
      address:req.body.address,
      webpage:req.body.webpage,
      storePhone:req.body.storePhone,
      email:req.body.email,
      storeNameManagerContact:req.body.storeNameManagerContact,
      mailManagerContact:req.body.mailManagerContact,
      storePhoneManagerContact:req.body.storePhoneManagerContact
    }).then((result)=>{
      res.json({ message: 'store was created success'})
    })
  });
  
  apiStores.get("/stores/:id", (req, res) => {
    db.Store.findAll({
      where: {
        id: req.params.id
      }
    }).then((result)=>{
      res.json(result)
    })
  });
  
  apiStores.put("/stores/:id", (req, res) => {
    
  });
  
  apiStores.delete("/stores/:id", (req, res) => {
    db.Store.destroy({
      where: {
        id: req.params.id
      }
    }).then((result)=>{
      res.json({ message: 'User deleted'})
    })
  });

  module.exports = apiStores;