

"use strict";
const server = require("../src/server");
const supertest = require("supertest");
const request = supertest(server.app);

let reqBody2= {
color: 'Blue',
  material: 'Jeans',
  countryOfManufacture:'Jordan',
  id:1,
foodId:3
};

let reqBody= {
  id:3,
  name:'Burger',
  type:'Fast Food',
  taste:'Spicy',

};


// ========== Server Tests==============
describe('SERVER TESTS:', () => {
   
    it('should respond with 404 on bad route', async () => {
      const response = await request.get('/badroute');
      expect(response.status).toEqual(404);
   
    });
  
    it('should respond with 404 on bad method', async () => {
        const response = await request.post('/clothes/test');

        expect(response.status).toEqual(404);
    
    });
 //=============================test food=================================== //


    
it('Should Create a record using POST /food', async () => {
       
  const response = await request.post('/food').send(reqBody);
    console.log(response.body)
    expect(response.status).toEqual(201);

});


// get ...read//
it('should Read a list of records using GET /food', async () => {
  const response = await request.get('/food');
  expect(response.status).toEqual(200);
  
});

//get by id ... read by id//
it('should Read a record using GET /food', async () => {
  const response = await request.get('/food/3');

  expect(response.status).toEqual(200);
 
});
//put .....id//
it('should Update a record using PUT /food/:id', async () => {

  
  const res = await request.put(`/food/3`).send(reqBody)
  expect(res.status).toEqual(200)
  
  
});

it("'should Destroy a record using DELETE - food'", async () => {
  const response = await request.delete(`/food/3`);
  expect(response.status).toEqual(204);
});



})



// // // =========== test Clothes ==============

// // // post......creat//


it('Should Create a record using POST /clothes', async () => {

    const response = await request.post('/clothes').send(reqBody2);
    
    expect(response.status).toEqual(201);
})


// get ...read//
it('should Read a list of records using GET /clothes', async () => {
    const response = await request.get('/clothes');
    expect(response.status).toEqual(200);
    
  });

  //get by id ... read by id//
  it('should Read a record using GET /clothes', async () => {
    const response = await request.get('/clothes/1');

    expect(response.status).toEqual(200);
    expect(response.body).toBeDefined();
  });
//put .....id//
it('should Update a record using PUT /clothes/:id', async () => {

    
    const res = await request.put(`/clothes/1`).send(reqBody2)
    expect(res.status).toEqual(200)
    
    
  });

it("'should Destroy a record using DELETE - clothes'", async () => {
    const response = await request.delete(`/clothes/1`);
    expect(response.status).toEqual(204);
  });
 
 
  



