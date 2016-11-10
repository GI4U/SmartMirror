/**
 * Copyright 2016 Marius Runde
 *
 * Movies component to suggest movies etc.
 */
'use strict';

import React from 'react';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import jquery from 'jquery';
import SmartMirrorComponent from './../../basic/SmartMirrorComponent.jsx';

import { MOVIES_API_URL } from './constants';

class Movies extends React.Component {

  constructor(props) {
    super(props);

    this.loadMovie = this.loadMovie.bind(this);
    this.onConfigHasChanged = this.onConfigHasChanged.bind(this);
    this.onConfigElementHasChanged = this.onConfigElementHasChanged.bind(this);

    const { urlParameters } = this.props;

    this.state = {
      movieTitle: null,
      movieRuntime: null,
      app: {
        urlParameters
      },
      config: {
        urlParameters
      }
    };
  }

  // Load a movie
  loadMovie(urlParameters = this.state.app.urlParameters) {
    jquery.get({
      contentType: 'application/json',
      url: MOVIES_API_URL + urlParameters,
      success: function(movie) {
        if (movie) {
          this.setState({
            movieTitle: movie.title,
            movieRuntime: movie.runtime,
            app: {
              urlParameters
            }
          });
        }
      }.bind(this)
    });
  }

  // Load a movie when the component will mount
  componentWillMount() {
    this.loadMovie();
  }

  // Called when the config has been saved or cancelled
  onConfigHasChanged(saved) {
    if (saved) {
      this.loadMovie(this.state.config.urlParameters);
    } else {
      this.setState({
        config: {
          urlParameters: this.state.app.urlParameters
        }
      });
    }
  }

  // Called when a single config element has been changed
  onConfigElementHasChanged(e) {
    switch (e.target.name) {
      case 'urlParameters':
        this.setState({
          config: {
            urlParameters: e.target.value
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
          <ControlLabel>URL Parameters:</ControlLabel>
          <FormControl
            type='text'
            name='urlParameters'
            placeholder='Enter the URL parameters here...'
            value={ this.state.config.urlParameters }
            onChange={ this.onConfigElementHasChanged }
          />
        </FormGroup>
      </form>
    );
  }

  // Render the component
  render() {
    return(
      <SmartMirrorComponent
        componentName='Movies'
        hasConfig={ true }
        config={ this.renderConfig() }
        onConfigHasChanged={ this.onConfigHasChanged }
      >
        <h3>{ this.state.movieTitle }&nbsp;<small>({ this.state.movieRuntime }&nbsp;min)</small></h3>
      </SmartMirrorComponent>
    );
  }
}

Movies.propTypes = {
  urlParameters: React.PropTypes.string
};

Movies.defaultProps = {
  urlParameters: '/random/movie'
};

export default Movies;
