//  const testRoutes = require('express').Router();
//  const mongoose = require('mongoose');
//  mongoose.Promise = global.Promise;
 
 const db         = require('../db');
const csvParser = require('../helpers/csvParser');

const {json} = require('../helpers/csvParser');
console.log(json);
process.exit(0);

//initiate routes
testRoutes.route('/')
    .get((req, res) =>{
    
        res.send('get route for test series');
    })
    .post((req, res) => {
        res.send('post route ');
    });

testRoutes.route('/:id')
    .get((req, res) => {
        res.send('get route by id');
    })

    .post((req, res) => {
        res.send('post route by id');
    })

    .patch((req, res) => {
        res.send('patch route');
    })
    
    .delete((req, res) => {
        res.send('delete route');
    });

    module.exports ={
        testRoutes
    }