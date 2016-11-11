/**
 * Copyright 2016 Marius Runde
 *
 * Basic component construct for all smart mirror components.
 */
'use strict';

import React from 'react';
import { Button } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import SmartMirrorComponentConfig from './SmartMirrorComponentConfig.jsx';

class SmartMirrorComponent extends React.Component {

  constructor(props) {
    super(props);

    this.openConfig = this.openConfig.bind(this);
    this.closeConfig = this.closeConfig.bind(this);
    this.renderConfig = this.renderConfig.bind(this);

    this.state = {
      showConfig: false
    };
  }

  // Open the config
  openConfig() {
    this.setState({
      showConfig: true
    });
  }

  // Close the config
  closeConfig(saved) {
    this.setState({
      showConfig: false
    });
    this.props.onConfigHasChanged(saved);
  }

  // Render the config of the component
  renderConfig() {
    const { showConfig } = this.state;
    const { componentName, config } = this.props;

    return (
      <div>
        <Button className='btnConfig' onClick={ this.openConfig }>
          <FontAwesome name='cog' />
        </Button>

        <SmartMirrorComponentConfig
          componentName={ componentName }
          showConfig={ showConfig }
          onConfigHasChanged={ this.closeConfig }
        >
          { config }
        </SmartMirrorComponentConfig>
      </div>
    );
  }

  // Render the complete component
  render(props) {
    const { hasConfig, config } = this.props;

    return (
      <div className='panel panel-default'>
        <div className='panel-header'>
          { hasConfig ? this.renderConfig() : '' }
        </div>
        <div className='panel-body'>
          { this.props.children }
        </div>
      </div>
    );
  }
}

SmartMirrorComponent.propTypes = {
  componentName: React.PropTypes.string.isRequired,
  hasConfig: React.PropTypes.bool,
  config: React.PropTypes.object,
  onConfigHasChanged: React.PropTypes.func
};

SmartMirrorComponent.defaultProps = {
  hasConfig: false
};

export default SmartMirrorComponent;
