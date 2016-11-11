/**
 * Copyright 2016 Marius Runde
 *
 * Welcome component to greet the user based on daytime.
 */
'use strict';

import React from 'react';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import SmartMirrorComponent from './../../basic/SmartMirrorComponent.jsx';

import { DAYTIME, GREETINGS } from './constants';

class Welcome extends React.Component {

  constructor(props) {
    super(props);

    this.setGreeting = this.setGreeting.bind(this);
    this.onConfigHasChanged = this.onConfigHasChanged.bind(this);
    this.onConfigElementHasChanged = this.onConfigElementHasChanged.bind(this);

    const { name } = this.props;

    this.state = {
      app: {
        name
      },
      config: {
        name
      }
    };
  }

  // Get the greeting for the daytime
  setGreeting() {
    var currentDate = new Date();
    var currentHours = currentDate.getHours();

    var greeting;
    if (currentHours < DAYTIME.NIGHT) {
      greeting = GREETINGS.NIGHT;
    } else if (currentHours < DAYTIME.MORNING) {
      greeting = GREETINGS.MORNING;
    } else if (currentHours < DAYTIME.AFTERNOON) {
      greeting = GREETINGS.AFTERNOON;
    } else {
      greeting = GREETINGS.NIGHT;
    }

    this.setState({
      greeting
    });
  }

  // Set the greeting initially
  componentWillMount() {
    this.setGreeting();
  }

  // Set the time interval
  componentDidMount() {
    const thirtyMinutes = 30 * 60 * 1000;

    this.state.timeInterval = window.setInterval(function() {
      this.setGreeting();
    }.bind(this), thirtyMinutes);
  }

  // Clear the time interval
  componentWillUnmount() {
    clearInterval(this.state.timeInterval);
  }

  // Called when the config has been saved or cancelled
  onConfigHasChanged(saved) {
    if (saved) {
      this.setState({
        app: this.state.config
      });
    } else {
      this.setState({
        config: this.state.app
      });
    }
  }

  // Called when a single config element has been changed
  onConfigElementHasChanged(e) {
    switch (e.target.name) {
      case 'name':
        this.setState({
          config: {
            name: e.target.value
          }
        });
        break;
    }
  }

  // Render the config
  renderConfig() {
    const { name } = this.state.config;

    return (
      <form>
        <FormGroup>
          <ControlLabel>Your name:</ControlLabel>
          <FormControl
            type='text'
            name='name'
            placeholder='Enter your name here...'
            value={ name }
            onChange={ this.onConfigElementHasChanged }
          />
        </FormGroup>
      </form>
    );
  }

  // Render the component
  render() {
    const { greeting, app } = this.state;

    return(
      <SmartMirrorComponent
        componentName='Welcome'
        hasConfig={ true }
        config={ this.renderConfig() }
        onConfigHasChanged={ this.onConfigHasChanged }
      >
        <h1>{ greeting + ', ' + app.name }</h1>
      </SmartMirrorComponent>
    );
  }
}

Welcome.propTypes = {
  name: React.PropTypes.string
};

Welcome.defaultProps = {
  name: 'stranger'
};

export default Welcome;
