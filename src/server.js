'use strict';

// 3rd party dependencies
const express = require('express');
const app = express()



// require handler error function // internal modules
const notFoundError = require('./error-handlers/404.js')
const errorHandler = require('./error-handlers/500.js')
const logger = require('./middleware/logger.js')
// const validator = require('./middleware/validator.js')
const clothesRoutes = require('./routes/clothes.js');
const foodRoutes = require('./routes/food.js');
app.use(express.json());






// global -> app level middleware 
app.use(express.json());// handles parsing of req.body
app.use(logger);//log the req
app.use(clothesRoutes);// now your routes are modular
app.use(foodRoutes);


//
app.get('/', (req, res) => {
    res.status(200).send('Hello World :)');
});




app.get('/bad', (req,res)=>{
    throw new Error('some thing went wrong');
});

// error handlers
app.use('*', notFoundError )// catch-all 404 handler
app.use(errorHandler)// internal server error handler



// listening function

function start(port){
    app.listen(port, () => {
        console.log(`listening on ${port}`);
    })
}



// export module for index.js
module.exports = {
  app: app,
start: start
}