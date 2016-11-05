/**
 * Copyright 2016 Marius Runde
 *
 * Basic component construct for all smart mirror components.
 */
'use strict';

import React from 'react';

class SmartMirrorComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    // Render the complete component
    render() {
        return (
            <div className="panel panel-default">
                <div className="panel-body">
                    {this.props.renderComponent()}
                </div>
            </div>
        );
    }
}

SmartMirrorComponent.propTypes = {
    renderComponent: React.PropTypes.func.isRequired
};

export default SmartMirrorComponent;
