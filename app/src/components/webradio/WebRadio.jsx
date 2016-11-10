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

    this.state = {
      // TODO
    };
  }

  // Called when the config has been saved or cancelled
  onConfigHasChanged(saved) {
    if (saved) {
      // TODO save changed config
    } else {
      // TODO reset config state
    }
  }

  // Called when a single config element has been changed
  onConfigElementHasChanged(e) {
    // TODO
  }

  // Render the config
  renderConfig() {
    return (
      <form>
        TODO
      </form>
    );
  }

  // Render the component
  render() {
    return(
      <SmartMirrorComponent
        componentName='WebRadio'
        hasConfig={ true }
        config={ this.renderConfig() }
        onConfigHasChanged={ this.onConfigHasChanged }
      >
        TODO
      </SmartMirrorComponent>
    );
  }
}

WebRadio.propTypes = {
  // TODO
};

export default WebRadio;
