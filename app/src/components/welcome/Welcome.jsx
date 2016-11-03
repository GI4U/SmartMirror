/**
 * Copyright 2016 Marius Runde
 * 
 * Welcome component to greet the user based on daytime.
 */
'use strict';

const React = require('react');

const { DAYTIME, GREETINGS } = require('./constants');

module.exports = React.createClass({

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
  },

  // Set the greeting initially
  componentWillMount: function() {
    this.setGreeting();
  },

  // Set the time interval
  componentDidMount: function() {
    const thirtyMinutes = 30 * 60 * 1000;
    this.state.timeInterval = window.setInterval(function() {
      this.setGreeting();
    }.bind(this), thirtyMinutes);
  },

  // Clear the time interval
  componentWillUnmount: function() {
    clearInterval(this.state.timeInterval);
  },

  // Render the class
  render: function() {
    const { greeting } = this.state;
    const { name } = this.props;
    
    return(
      <h3>{ greeting + ', ' + name }</h3>
    );
  }
});
