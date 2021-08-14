'use strict';

const food= (sequalize, DataTypes) =>  sequalize.define('food', {
   name: {
            type: DataTypes.STRING,
            allowNull: false
        }, 
     type: {
            type: DataTypes.STRING,
            allowNull: false
        },
     taste:
        {
            type:DataTypes.STRING,
            allowNull: false
        },
       
    });
 


module.exports =food ;