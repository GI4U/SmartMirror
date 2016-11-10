/**
 * Copyright 2016 Marius Runde
 * 
 * Constants of the Weather component.
 */
'use strict';

// OpenWeatherMap API Key
const API_KEY = 'YOUR_API_KEY';

// Customized OpenWeatherMap URLs to request current and forecast weather data
const CURRENT_WEATHER_URL = 'http://api.openweathermap.org/data/2.5/weather?APPID=' + API_KEY + '&q=';
const FORECAST_WEATHER_URL = 'api.openweathermap.org/data/2.5/forecast?APPID=' + API_KEY + '&q=';

// General URL for the OpenWeatherMap icons
const WEATHER_ICON_URL = 'http://openweathermap.org/img/w/';

module.exports = {
  CURRENT_WEATHER_URL,
  FORECAST_WEATHER_URL,
  WEATHER_ICON_URL
};