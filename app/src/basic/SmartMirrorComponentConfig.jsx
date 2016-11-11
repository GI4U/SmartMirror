/**
 * Copyright 2016 Marius Runde
 *
 * Config construct for all smart mirror components.
 */
'use strict';

import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import RemoveComponentDialog from '../dialogs/RemoveComponentDialog.jsx';

class SmartMirrorComponentConfig extends React.Component {

  constructor(props) {
    super(props);

    this.onCancel = this.onCancel.bind(this);
    this.onSave = this.onSave.bind(this);
    this.onRemove = this.onRemove.bind(this);
    this.onRemoveDialogResult = this.onRemoveDialogResult.bind(this);

    this.state = {
      showRemoveDialog: false
    };
  }

  // Cancel the config
  onCancel() {
    this.props.onConfigHasChanged(false);
  }

  // Save the changes made in the config
  onSave() {
    this.props.onConfigHasChanged(true);
  }

  // Open the dialog to remove the component
  onRemove() {
    this.setState({
      showRemoveDialog: true
    });
  }

  // Called when the dialog to remove the component sent a result
  onRemoveDialogResult(res) {
    if (res) {
      // TODO remove the component (maybe via a store)
    } else {
      this.setState({
        showRemoveDialog: false
      });
    }
  }

  // Render the config
  render(props) {
    const { showRemoveDialog } = this.state;
    const { componentName, showConfig } = this.props;

    return (
      <div>

        <Modal show={ showConfig } onHide={ this.onCancel }>

          <Modal.Header closeButton>
            <Modal.Title>{ componentName }</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p>Configuration of the { componentName } component</p>
            { this.props.children }
          </Modal.Body>

          <Modal.Footer>
            <Button bsStyle='danger' onClick={ this.onRemove } style={{ float: 'left' }}>
              <FontAwesome name='trash-o' style={{ color: 'white' }} />
            </Button>
            <Button bsStyle='warning' onClick={ this.onCancel }>
              <FontAwesome name='ban' style={{ color: 'white' }} /> Cancel
            </Button>
            <Button type='submit' bsStyle='primary' onClick={ this.onSave }>
              <FontAwesome name='floppy-o' style={{ color: 'white' }} /> Save
            </Button>
          </Modal.Footer>

        </Modal>

        <RemoveComponentDialog
          componentName={ componentName }
          showDialog={ showRemoveDialog }
          onDialogResult={ this.onRemoveDialogResult }
        />

      </div>
    );
  }
}

SmartMirrorComponentConfig.propTypes = {
  componentName: React.PropTypes.string.isRequired,
  showConfig: React.PropTypes.bool.isRequired,
  onConfigHasChanged: React.PropTypes.func.isRequired
};

export default SmartMirrorComponentConfig;
