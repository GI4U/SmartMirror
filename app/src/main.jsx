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
import React from 'react';
import ReactDOM from 'react-dom';

// Required components
import Clock from './components/clock/Clock.jsx';
import Movies from './components/movies/Movies.jsx';
import Weather from './components/weather/Weather.jsx';
import Welcome from './components/welcome/Welcome.jsx';

function render() {
  ReactDOM.render(<Welcome name="Marius" />, document.getElementById('container'));
}

render();
