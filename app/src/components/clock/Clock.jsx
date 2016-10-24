/**
 * Copyright 2016 Marius Runde
 * 
 * Clock component to display the current time.
 */
'use strict';

const React = require('react');

module.exports = React.createClass({
  // Get the current time
  getTime: function() {
    var time = new Date();
    return time.toLocaleTimeString();;
  },
  // Render the class
  render: function() {
    return(
      <div className="panel panel-default">
        <div className="panel-heading">
          Time
        </div>
        <div className="panel-body">
          { this.getTime() }
        </div>
      </div>
    );
  }
});
