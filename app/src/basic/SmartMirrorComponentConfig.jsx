/**
 * Copyright 2016 Marius Runde
 *
 * Config construct for all smart mirror components.
 */
'use strict';

import React from 'react';
import { Button, Modal } from 'react-bootstrap';

class SmartMirrorComponentConfig extends React.Component {

  constructor(props) {
    super(props);

    this.onCancel = this.onCancel.bind(this);
    this.onSave = this.onSave.bind(this);
  }

  // Cancel the config
  onCancel() {
    this.props.onConfigHasChanged(false);
  }

  // Save the changes made in the config
  onSave() {
    this.props.onConfigHasChanged(true);
  }

  // Render the config
  render(props) {
    const { componentName, showConfig } = this.props;

    return (
      <Modal show={ showConfig } onHide={ this.onCancel }>
        <Modal.Header closeButton>
          <Modal.Title>{ componentName }</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Configuration of the { componentName } component</p>
          { this.props.children }
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={ this.onCancel }>Cancel</Button>
          <Button type="submit" bsStyle="primary" onClick={ this.onSave }>Save</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

SmartMirrorComponentConfig.propTypes = {
  componentName: React.PropTypes.string.isRequired,
  showConfig: React.PropTypes.bool.isRequired,
  onConfigHasChanged: React.PropTypes.func.isRequired
};

export default SmartMirrorComponentConfig;
