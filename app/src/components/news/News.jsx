/**
 * Copyright 2016 Marius Runde
 *
 * News component to display a news feed.
 */
'use strict';

import React from 'react';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import jquery from 'jquery';
import SmartMirrorComponent from './../../basic/SmartMirrorComponent.jsx';

class News extends React.Component {

  constructor(props) {
    super(props);

    this.loadNewsFeed = this.loadNewsFeed.bind(this);

    this.onConfigHasChanged = this.onConfigHasChanged.bind(this);
    this.onConfigElementHasChanged = this.onConfigElementHasChanged.bind(this);

    this.state = {
      // TODO
    };
  }

  // Load the news feed
  loadNewsFeed() {
    // TODO
  }

  // Load the news feed when the component will mount
  componentWillMount() {
    this.loadNewsFeed();
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
        componentName='News'
        hasConfig={ true }
        config={ this.renderConfig() }
        onConfigHasChanged={ this.onConfigHasChanged }
      >
        TODO
      </SmartMirrorComponent>
    );
  }
}

News.propTypes = {
  // TODO
};

export default News;
