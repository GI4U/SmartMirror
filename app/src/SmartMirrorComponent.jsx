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
    render(props) {
        return (
            <div className="panel panel-default">
                <div className="panel-body">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default SmartMirrorComponent;