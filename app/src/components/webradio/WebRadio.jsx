/**
 * Copyright 2016 Marius Runde
 *
 * WebRadio component to listen to a web radio stream.
 */
'use strict';

import React from 'react';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import SmartMirrorComponent from './../../basic/SmartMirrorComponent.jsx';

class WebRadio extends React.Component {

  constructor(props) {
    super(props);

    this.onConfigHasChanged = this.onConfigHasChanged.bind(this);
    this.onConfigElementHasChanged = this.onConfigElementHasChanged.bind(this);

    const { stream } = this.props;

    this.state = {
      app: {
        stream
      },
      config: {
        stream
      }
    };
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
      case 'stream':
        this.setState({
          config: {
            stream: e.target.value
          }
        });
        break;
    }
  }

  // Render the config
  renderConfig() {
    const { stream } = this.state.config;

    return (
      <form>
        <FormGroup>
          <ControlLabel>Web radio stream:</ControlLabel>
          <FormControl
            type='text'
            name='stream'
            placeholder='Enter the stream here...'
            value={ stream }
            onChange={ this.onConfigElementHasChanged }
          />
        </FormGroup>
      </form>
    );
  }

  // Render the component
  render() {
    const { stream } = this.state.app;

    return(
      <SmartMirrorComponent
        componentName='WebRadio'
        hasConfig={ true }
        config={ this.renderConfig() }
        onConfigHasChanged={ this.onConfigHasChanged }
      >
        <audio src={ stream } controls>
          Your browser does not support the audio element.
        </audio>
      </SmartMirrorComponent>
    );
  }
}

WebRadio.propTypes = {
  stream: React.PropTypes.string.isRequired
};

export default WebRadio;
