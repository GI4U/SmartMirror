/**
 * Copyright 2016 Marius Runde
 * 
 * Movies component to suggest movies etc.
 */
'use strict';

const React  = require('react');
const jquery = require('jquery');

const RANDOM_MOVIE_URL = 'URL_TO_YOUR_MOVIES_API';

module.exports = React.createClass({

  getInitialState: function() {
    return {
      movieTitle: null,
      movieRuntime: null
    };
  },

  // Load a movie
  loadMovie: function() {
    jquery.get({
      contentType: 'application/json',
      url: RANDOM_MOVIE_URL,
      success: function(movie) {
        if (movie) {
          this.setState({
            movieTitle: movie.title,
            movieRuntime: movie.runtime
          });
        }
      }.bind(this)
    });
  },

  // Set the time initially
  componentWillMount: function() {
    this.loadMovie();
  },

  // Render the class
  render: function() {
    return(
      <div className="panel panel-default">
        <div className="panel-body">
          <h3>{ this.state.movieTitle } <small>({ this.state.movieRuntime } min)</small></h3>
        </div>
      </div>
    );
  }

});
