/**
 * Copyright 2016 Marius Runde
 *
 * Movies component to suggest movies etc.
 */
'use strict';

import React from 'react';
import jquery from 'jquery';
import SmartMirrorComponent from './../../basic/SmartMirrorComponent.jsx';

import { RANDOM_MOVIE_URL } from './constants';

class Movies extends React.Component {

  constructor(props) {
    super(props);

    this.loadMovie = this.loadMovie.bind(this);

    this.state = {
      movieTitle: null,
      movieRuntime: null
    };
  }

  // Load a movie
  loadMovie() {
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
  }

  // Load a movie when the component will mount
  componentWillMount() {
    this.loadMovie();
  }

  // Render the component
  render() {
    return(
        <SmartMirrorComponent componentName="Movies">
            <h3>{ this.state.movieTitle }&nbsp;<small>({ this.state.movieRuntime }&nbsp;min)</small></h3>
        </SmartMirrorComponent>
    );
  }
}

Movies.propTypes = {
  // TODO
};

export default Movies;
