/**
 * Copyright 2016 Marius Runde
 * 
 * Main application of the Smart Mirror.
 */
'use strict';

// --------------------------------------------------
// Imports
// --------------------------------------------------

// Required modules
const React    = require('react');
const ReactDOM = require('react-dom');

// Required components
const Clock   = require('./components/clock/Clock.jsx');
const Movies  = require('./components/movies/Movies.jsx');
const Weather = require('./components/weather/Weather.jsx');

function render() {
  //ReactDOM.render(<Clock />, document.getElementById('container'));
  //ReactDOM.render(<Movies />, document.getElementById('container'));
  ReactDOM.render(<Weather />, document.getElementById('container'));
}

render();
