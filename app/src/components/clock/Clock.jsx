/**
 * Copyright 2016 Marius Runde
 *
 * Clock component to display the current time.
 */
'use strict';

import React from 'react';
import SmartMirrorComponent from './../../basic/SmartMirrorComponent.jsx';

class Clock extends React.Component {

  constructor(props) {
    super(props);

    this.setTime = this.setTime.bind(this);

    this.state = {
      time: null
    };
  }

  // Set the time
  setTime() {
    var currentDate = new Date();
    this.setState({
      time: currentDate.toLocaleTimeString()
    });
  }

  // Set the time initially
  componentWillMount() {
    this.setTime();
  }

  // Set the time interval
  componentDidMount() {
    this.state.timeInterval = window.setInterval(function() {
      this.setTime();
    }.bind(this), 1000);
  }

  // Clear the time interval
  componentWillUnmount() {
    clearInterval(this.state.timeInterval);
  }

  // Render the component
  render() {
    return(
      <SmartMirrorComponent componentName='Clock'>
        <h1>{ this.state.time }</h1>
      </SmartMirrorComponent>
    );
  }
}

export default Clock;
