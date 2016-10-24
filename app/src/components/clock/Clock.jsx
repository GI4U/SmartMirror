/**
 * Copyright 2016 Marius Runde
 * 
 * Clock component to display the current time.
 */
'use strict';

const React = require('react');

module.exports = React.createClass({

  // Set the time
  setTime: function() {
    var currentDate = new Date();
    this.setState({
      time: currentDate.toLocaleTimeString()
    });
  },

  // Set the time initially
  componentWillMount: function() {
    this.setTime();
  },

  // Set the time interval
  componentDidMount: function() {
    this.state.timeInterval = window.setInterval(function() {
      this.setTime();
    }.bind(this), 1000);
  },

  // Clear the time interval
  componentWillUnmount: function() {
    clearInterval(this.state.timeInterval);
  },

  // Render the class
  render: function() {
    return(
      <div className="panel panel-default">
        <div className="panel-body">
          { this.state.time }
        </div>
      </div>
    );
  }

});
