/**
 * Copyright 2016 Marius Runde
 *
 * Welcome component to greet the user based on daytime.
 */
'use strict';

import React from 'react';
import SmartMirrorComponent from './../../SmartMirrorComponent.jsx';

import { DAYTIME, GREETINGS } from './constants';

class Welcome extends React.Component {

  constructor(props) {
    super(props);

    this.setGreeting = this.setGreeting.bind(this);

    this.state = {
      name: null
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

  // Render the component
  render() {
    const { greeting } = this.state;
    const { name } = this.props;

    return(
        <SmartMirrorComponent>
            <h3>{ greeting + ',&nbsp;' + name }</h3>
        </SmartMirrorComponent>
    );
  }
}

Welcome.propTypes = {
  name: React.PropTypes.string.isRequired
};

Welcome.defaultProps = {
  name: 'stranger'
};

export default Welcome;
