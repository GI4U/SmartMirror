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
const Welcome = require('./components/welcome/Welcome.jsx');

function render() {
  ReactDOM.render(<Welcome name="Marius" />, document.getElementById('container'));
}

render();
