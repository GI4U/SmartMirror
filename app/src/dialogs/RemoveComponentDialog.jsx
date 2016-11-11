/**
 * Copyright 2016 Marius Runde
 *
 * Config construct for all smart mirror components.
 */
'use strict';

import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

class RemoveComponentDialog extends React.Component {

  constructor(props) {
    super(props);

    this.onCancel = this.onCancel.bind(this);
    this.onRemove = this.onRemove.bind(this);
  }

  // Cancel the dialog
  onCancel() {
    this.props.onDialogResult(false);
  }

  // Remove the component
  onRemove() {
    this.props.onDialogResult(true);
  }

  // Render the config
  render(props) {
    const { componentName, showDialog } = this.props;

    return (
      <Modal show={ showDialog } onHide={ this.onCancel }>

        <Modal.Header closeButton>
          <Modal.Title>Remove { componentName }</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Do you really want to remove the component { componentName }?</p>
        </Modal.Body>

        <Modal.Footer>
          <Button bsStyle='success' onClick={ this.onCancel }>
            <FontAwesome name='ban' style={{ color: 'white' }} /> NO
          </Button>
          <Button bsStyle='danger' onClick={ this.onRemove }>
            <FontAwesome name='trash-o' style={{ color: 'white' }} /> YES
          </Button>
        </Modal.Footer>

      </Modal>
    );
  }
}

RemoveComponentDialog.propTypes = {
  componentName: React.PropTypes.string.isRequired,
  showDialog: React.PropTypes.bool.isRequired,
  onDialogResult: React.PropTypes.func.isRequired
};

export default RemoveComponentDialog;
