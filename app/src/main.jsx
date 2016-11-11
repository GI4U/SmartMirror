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
import Calendar from './components/calendar/Calendar.jsx';
import Clock from './components/clock/Clock.jsx';
import Movies from './components/movies/Movies.jsx';
import News from './components/news/News.jsx';
import Weather from './components/weather/Weather.jsx';
import WebRadio from './components/webradio/WebRadio.jsx';
import Welcome from './components/welcome/Welcome.jsx';

function render() {
  ReactDOM.render(<Welcome name='Marius' />, document.getElementById('welcome'));
  ReactDOM.render(<Calendar />, document.getElementById('calendar'));
  ReactDOM.render(<Clock />, document.getElementById('clock'));
  ReactDOM.render(<Movies />, document.getElementById('movies'));
  ReactDOM.render(<News />, document.getElementById('news'));
  ReactDOM.render(<Weather location='Braunschweig' />, document.getElementById('weather'));
  ReactDOM.render(<WebRadio stream='http://1live.akacast.akamaistream.net/7/706/119434/v1/gnl.akacast.akamaistream.net/1live' />, document.getElementById('webradio'));
}

render();
