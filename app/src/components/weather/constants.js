/**
 * Copyright 2016 Marius Runde
 * 
 * Constants of the Weather component.
 */
'use strict';

// OpenWeatherMap API Key
const API_KEY = 'YOUR_API_KEY';

// Location for the weather forecast
const LOCATION = 'YOUR_LOCATION';

// Customized OpenWeatherMap URL to request weather data
const WEATHER_URL = 'http://api.openweathermap.org/data/2.5/weather?q=' + LOCATION + '&APPID=' + API_KEY;

// General URL for the OpenWeatherMap icons
const ICON_URL = 'http://openweathermap.org/img/w/';

module.exports = {
  WEATHER_URL,
  ICON_URL
};
