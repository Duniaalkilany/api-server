
'use strict';

require('dotenv').config();
const POSTGRES_URI = process.env.NODE_ENV="test" ?'sqlite:memory' :'postgres://localhost:5432/lab4';
const { Sequelize, DataTypes } = require('sequelize');

const Collection = require('./collection-class')

const foodsSchema = require('./food');
const clothesSchema = require('./clothes');

let sequelize = new Sequelize(POSTGRES_URI);


const foodModel= foodsSchema (sequelize, DataTypes)
const clothesModel =clothesSchema (sequelize, DataTypes);

foodModel.hasMany(clothesModel, { foreignKey: 'clothId', sourceKey: 'id'});
clothesModel.belongsTo(foodModel, { foreignKey: 'clothId', targetKey: 'id'});


//export Collections 
const foodCollection = new Collection(foodModel);
const clothesCollection = new Collection(clothesModel);


module.exports = {
  db: sequelize,
  foodCollection: foodCollection,
  clothesCollection:clothesCollection
}











