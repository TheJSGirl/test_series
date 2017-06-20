const mongoose = require('mongoose');
const {Test} = require('../models/test_schema');

//connection
mongoose.connect('mongodb://localhost/test');


module.exports = {
    mongoose
}