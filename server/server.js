'use strict';

// --------------------------------------------------
// Imports
// --------------------------------------------------

// Load the application's configuration
const config = require('./config');

// Required modules
const colors  = require('colors');
const express = require('express');
const path    = require('path');

// --------------------------------------------------
// Start Message
// --------------------------------------------------

console.log('\n############################################################');
console.log('############################################################');
console.log('\n  Application:', 'Smart Mirror'.cyan);
console.log('\n  Version:    ', '0.0.1'.cyan);
console.log('\n  Copyright:  ', '2016'.cyan);
console.log('\n  Licence:    ', 'MIT'.cyan);
console.log('\n  Authors:    ', 'Marius Runde'.cyan);
console.log('\n############################################################');
console.log('############################################################\n');
console.log('\n////////////////////////////////////////////////////////////\n');
console.log('               STARTING SERVER...'.cyan);
console.log('\n////////////////////////////////////////////////////////////\n');
console.log('\n------------------------------------------------------------');

// --------------------------------------------------
// Express Web Server
// --------------------------------------------------

// Set up the express web server
var app = express();
app.use(express.static(path.join(__dirname, '../app/dist')));

// Start the web server
var server = app.listen(config.express_port, function() {
  console.log('  Express server listening on port', config.express_port.toString().cyan);
  console.log('------------------------------------------------------------');
});
