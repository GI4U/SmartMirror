/**
 * Copyright 2016 Marius Runde
 * 
 * Weather component to display the current weather.
 */
'use strict';

const React  = require('react');
const jquery = require('jquery');

const API_KEY     = 'YOUR_API_KEY';
const LOCATION    = 'YOUR_LOCATION';
const WEATHER_URL = 'http://api.openweathermap.org/data/2.5/weather?q=' + LOCATION + '&APPID=' + API_KEY;
const ICON_URL    = 'http://openweathermap.org/img/w/';

module.exports = React.createClass({

  // Initialize the state
  getInitialState: function() {
    return {
      weatherIcon: null,
      currentTemp: null
    };
  },

  // Load the current weather
  loadCurrentWeather: function() {
    jquery.get({
      url: WEATHER_URL,
      success: function(res) {
        if (res) {
          let tempInCelsius = Math.floor(res.main.temp - 273.15);
          this.setState({
            weatherIcon: ICON_URL + res.weather[0].icon + '.png',
            currentTemp: tempInCelsius
          });
        }
      }.bind(this)
    });
  },

  // Load the current weather when the component will mount
  componentWillMount: function() {
    this.loadCurrentWeather();
  },

  // Render the class
  render: function() {
    return(
      <div className="panel panel-default">
        <div className="panel-body">
          <h3><img src={ this.state.weatherIcon } /> { this.state.currentTemp }°C</h3>
        </div>
      </div>
    );
  }

});
