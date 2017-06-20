const mongoose = require('mongoose');
const csv      =require('csvtojson');


const {Test} = require('../models/test_schema');
const {db} = require('../db');

const csvFolder = __dirname + '/../csvfiles/';
const csvFileFullPath = csvFolder + 'demo.csv';
console.log(csvFileFullPath);   

var csvParser = csv()
            .fromFile(csvFileFullPath)
            .on('json',(jsonObj)=>{
                console.log('got json');
                data = jsonObj;
                return data;
                
            })
            .on('done',(error)=>{
                console.log('end');
                return error;
            });

module.exports = {
    csvParser
};
