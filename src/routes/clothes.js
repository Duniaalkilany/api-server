'use strict';

const express = require('express');

const router = express.Router();
//require() the collection class
const {clothesCollection}=require('../models/index');

// RESTful routes
router.get('/clothes', getClothes);
router.get('/clothes/:id',getOneCloth);
router.post('/clothes', createClothes);
router.put('/clothes/:id', updateClothes);
router.delete('/clothes/:id', deleteClothes);


// RESTful route handlers

 async function getClothes(req, res) {
  let clothes= await clothesCollection.read();
  res.status(200).json(clothes);
  }
  
  async function getOneCloth(request, response) {
    let id = (request.params.id);
    let cloth = await clothesCollection.read(id);
    response.status(200).json(cloth);
  }
  
  async function createClothes(req, res) {
    let newcloth = req.body;
    let cloth =  await  clothesCollection.create(newcloth);
    res.status(201).json(cloth);
}
  



async function updateClothes(req, res) {
    let id=req.params.id
    let content = req.body;
    let updated = await  clothesCollection.update(id, content);
    res.status(200).json(updated );
  }
  
  async function deleteClothes(req, res) {
    let id = req.params.id;
    let deleted = await  clothesCollection.delete(id);
    res.status(204).json(deleted);
  }
  
  module.exports = router;