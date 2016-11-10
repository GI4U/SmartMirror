/**
 * Copyright 2016 Marius Runde
 *
 * Calendar component to display the current and next upcoming event.
 */
'use strict';

import React from 'react';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import jquery from 'jquery';
import SmartMirrorComponent from './../../basic/SmartMirrorComponent.jsx';

class Calendar extends React.Component {

  constructor(props) {
    super(props);

    this.loadCurrentEvent = this.loadCurrentEvent.bind(this);
    this.loadNextEvent = this.loadNextEvent.bind(this);

    this.onConfigHasChanged = this.onConfigHasChanged.bind(this);
    this.onConfigElementHasChanged = this.onConfigElementHasChanged.bind(this);

    this.state = {
      // TODO
    };
  }

  // Load the current event
  loadCurrentEvent() {
    // TODO
  }

  // Load the next event
  loadNextEvent() {
    // TODO
  }

  // Load the current and next event when the component will mount
  componentWillMount() {
    this.loadCurrentEvent();
    this.loadNextEvent();
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
        componentName='Calendar'
        hasConfig={ true }
        config={ this.renderConfig() }
        onConfigHasChanged={ this.onConfigHasChanged }
      >
        TODO
      </SmartMirrorComponent>
    );
  }
}

Calendar.propTypes = {
  // TODO
};

export default Calendar;
