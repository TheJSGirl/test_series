const express    = require('express');
const bodyParser = require('body-parser');
const path       = require('path');


//loading configuration
const config    = require('./config/config');
const port      = config['port-no'];




//initiate app
const app       = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//routes here
const {testRoutes} = require('./routes/test.js');
app.use('/', testRoutes);


//listen port
app.listen(port, ()=> {
    console.log('listen at port no.', port);
});