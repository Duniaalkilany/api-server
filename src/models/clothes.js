'use strict';

const clothes= (sequalize, DataTypes) =>
 sequalize.define('clothes', {
      color: {
            type: DataTypes.STRING,
            allowNull: false
        }, 
       material: {
            type: DataTypes.STRING,
            allowNull: false
        },
        countryOfManufacture:
        {
            type:DataTypes.STRING,
            allowNull: false
        },
        foodId: {
            type: DataTypes.INTEGER,
            allowNull: false},
        });
  


module.exports = clothes;