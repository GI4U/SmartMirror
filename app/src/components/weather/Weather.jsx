/**
 * Copyright 2016 Marius Runde
 *
 * Weather component to display the current weather.
 */
'use strict';

import React from 'react';
import jquery from 'jquery';
import SmartMirrorComponent from './../../SmartMirrorComponent.jsx';

const API_KEY     = 'YOUR_API_KEY';
const LOCATION    = 'YOUR_LOCATION';
const WEATHER_URL = 'http://api.openweathermap.org/data/2.5/weather?q=' + LOCATION + '&APPID=' + API_KEY;
const ICON_URL    = 'http://openweathermap.org/img/w/';

class Weather extends SmartMirrorComponent {

  constructor(props) {
    super(props);

    this.loadCurrentWeather = this.loadCurrentWeather.bind(this);

    this.state = {
      weatherIcon: null,
      currentTemp: null
    };
  }

  // Load the current weather
  loadCurrentWeather() {
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
  }

  // Load the current weather when the component will mount
  componentWillMount() {
    this.loadCurrentWeather();
  }

  // Render the class
  renderComponent() {
    return(
      <h3><img src={ this.state.weatherIcon } /> { this.state.currentTemp }°C</h3>
    );
  }
}

Weather.propTypes = {
  // TODO
};

export default Weather;
