/**
 * Copyright 2016 Marius Runde
 *
 * Weather component to display the current weather.
 */
'use strict';

import React from 'react';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import jquery from 'jquery';
import SmartMirrorComponent from './../../basic/SmartMirrorComponent.jsx';

import { CURRENT_WEATHER_URL, FORECAST_WEATHER_URL, WEATHER_ICON_URL } from './constants';

class Weather extends React.Component {

  constructor(props) {
    super(props);

    this.loadCurrentWeather = this.loadCurrentWeather.bind(this);
    this.loadForecastWeather = this.loadForecastWeather.bind(this);

    this.onConfigHasChanged = this.onConfigHasChanged.bind(this);
    this.onConfigElementHasChanged = this.onConfigElementHasChanged.bind(this);

    const { location } = this.props;

    this.state = {
      currentWeather: {
        icon: null,
        temp: null
      },
      forecastWeather: {
        icon: null,
        temp: null
      },
      app: {
        location
      },
      config: {
        location
      }
    };
  }

  // Load the current weather
  loadCurrentWeather() {
    const { location } = this.state.app;

    jquery.get({
      url: CURRENT_WEATHER_URL + location,
      success: function(res) {
        if (res) {
          let tempInCelsius = Math.floor(res.main.temp - 273.15);
          this.setState({
            currentWeather: {
              icon: WEATHER_ICON_URL + res.weather[0].icon + '.png',
              temp: tempInCelsius
            }
          });
        }
      }.bind(this)
    });
  }

  // Load the forecast weather
  loadForecastWeather() {
    const { location } = this.state.app;

    jquery.get({
      url: FORECAST_WEATHER_URL + location,
      success: function(res) {
        if (res) {
          // TODO
          this.setState({
            forecastWeather: {
            }
          });
        }
      }.bind(this)
    });
  }

  // Load the current weather when the component will mount
  componentWillMount() {
    this.loadCurrentWeather();
    this.loadForecastWeather();
  }

  // Set the weather intervals
  componentDidMount() {
    const thirtyMinutes = 30 * 60 * 1000;

    // Interval for current weather
    this.state.currentWeatherInterval = window.setInterval(function() {
      this.loadCurrentWeather();
    }.bind(this), thirtyMinutes);

    // Interval for forecast weather
    this.state.forecastWeatherInterval = window.setInterval(function() {
      this.loadForecastWeather();
    }.bind(this), thirtyMinutes);
  }

  // Clear the weather interval
  componentWillUnmount() {
    clearInterval(this.state.currentWeatherInterval);
    clearInterval(this.state.forecastWeatherInterval);
  }

  // Called when the config has been saved or cancelled
  onConfigHasChanged(saved) {
    if (saved) {
      this.setState({
        app: {
          location: this.state.config.location
        }
      });
    } else {
      this.setState({
        config: {
          location: this.state.app.location
        }
      });
    }
  }

  // Called when a single config element has been changed
  onConfigElementHasChanged(e) {
    switch (e.target.name) {
      case 'location':
        this.setState({
          config: {
            location: e.target.value
          }
        });
        break;
    }
  }

  // Render the config
  renderConfig() {
    return (
      <form>
        <FormGroup>
          <ControlLabel>Your location:</ControlLabel>
          <FormControl
            type='text'
            name='location'
            placeholder='Enter your location here...'
            value={ this.state.config.location }
            onChange={ this.onConfigElementHasChanged }
          />
        </FormGroup>
      </form>
    );
  }

  // Render the component
  render() {
    const { currentWeather, forecastWeather, app } = this.state;

    return(
      <SmartMirrorComponent
        componentName='Weather'
        hasConfig={ true }
        config={ this.renderConfig() }
        onConfigHasChanged={ this.onConfigHasChanged }
      >
        <h3>
          <img src={ currentWeather.icon } /> { currentWeather.temp }°C<br/>
          <small>{ app.location }</small>
        </h3>
      </SmartMirrorComponent>
    );
  }
}

Weather.propTypes = {
  location: React.PropTypes.string.isRequired
};

export default Weather;
