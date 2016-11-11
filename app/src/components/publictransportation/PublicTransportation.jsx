/**
 * Copyright 2016 Marius Runde
 *
 * PublicTransportation component to display the next departures of bus and train lines.
 */
'use strict';

import React from 'react';
import { FormGroup, ControlLabel, FormControl, Image } from 'react-bootstrap';
import jquery from 'jquery';
import SmartMirrorComponent from './../../basic/SmartMirrorComponent.jsx';

import { PUBLIC_TRANSPORTATION_URL } from './constants';

class PublicTransportation extends React.Component {

  constructor(props) {
    super(props);

    this.loadNextDepartures = this.loadNextDepartures.bind(this);

    this.onConfigHasChanged = this.onConfigHasChanged.bind(this);
    this.onConfigElementHasChanged = this.onConfigElementHasChanged.bind(this);

    const { urlParameters } = this.props;

    this.state = {
      // TODO
      app: {
        urlParameters
      },
      config: {
        urlParameters
      }
    };
  }

  // Load the next departures
  loadNextDepartures() {
    const { urlParameters } = this.state.app;

    jquery.get({
      url: PUBLIC_TRANSPORTATION_URL + urlParameters,
      success: function(res) {
        if (res) {
          this.setState({
            // TODO
          });
        }
      }.bind(this)
    });
  }

  // Called when the config has been saved or cancelled
  onConfigHasChanged(saved) {
    if (saved) {
      this.setState({
        app: {
          urlParameters: this.state.config.urlParameters
        }
      });
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
          <ControlLabel>URL parameters:</ControlLabel>
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
        componentName='PublicTransportation'
        hasConfig={ true }
        config={ this.renderConfig() }
        onConfigHasChanged={ this.onConfigHasChanged }
      >
        TODO
      </SmartMirrorComponent>
    );
  }
}

PublicTransportation.propTypes = {
  urlParameters: React.PropTypes.string.isRequired
};

export default PublicTransportation;
