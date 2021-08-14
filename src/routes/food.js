'use strict';

const express = require('express');

const router = express.Router();
//require() the collection class
const {foodCollection}=require('../models/index');

// RESTful routes
router.get('/food', getfood);
router.get('/food/:id',getOnefood);
router.post('/food', createfood);
router.put('/food/:id', updatefood);
router.delete('/food/:id', deletefood);


// RESTful route handlers

 async function getfood(req, res) {
  let food= await foodCollection.read();
  res.status(200).json(food);
  }
  
  async function getOnefood(request, response) {
    let id = (request.params.id);
    let food = await foodCollection.read(id);
    response.status(200).json(food);
  }
  
  async function createfood(req, res) {
    let newfood = req.body;
    let food = await foodCollection.create(newfood);
    res.status(201).json(food);
}
  


async function updatefood(req, res) {
    let id=req.params.id
    let content = req.body;
    let updated = await  foodCollection.update(id, content);
    res.status(200).json(updated );
  }
  
  async function deletefood(req, res) {
    let id = req.params.id;
    let deleted = await  foodCollection.delete(id);
    res.status(204).json(deleted);
  }
  
  module.exports = router;