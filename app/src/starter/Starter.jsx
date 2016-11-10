/**
 * Copyright 2016 Marius Runde
 *
 * Starter application which keeps all active components.
 */
'use strict';

import React from 'react';

class Starter extends React.Component {

  constructor(props) {
    super(props);

    this.addComponent = this.addComponent.bind(this);
    this.removeComponent = this.removeComponent.bind(this);

    this.state = {
      components: this.props.components
    };
  }

  // Add a component at the given position
  addComponent(component, index) {
    var { components } = this.state;
    components[index] = component;

    this.setState({
      components
    });
  }

  // Remove a component at the given position
  removeComponent(index) {
    var { components } = this.state;
    components[index] = null;

    this.setState({
      components
    });
  }

  // Render the component
  render() {
    return(
      <span>TODO</span>
    );
  }
}

Starter.propTypes = {
  components: React.PropTypes.array.isRequired
};

export default Starter;
