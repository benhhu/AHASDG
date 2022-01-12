import React, { Component } from 'react';

import AppConstants from '../../AppConstants.js';

import '../../Exposome.app.css';

class WhatIs extends Component {

    handleBackClick = () => {
        this.props.buttonHandler(AppConstants.OP_SHOW_HOME);
        this.props.changePanelHandler(AppConstants.PAGE_HOME);
    }

    render() {
        return(
            <div className='mainPanel'>
                <div className='introText'>
                    What is an Exposome?
                </div>
                <div className='bodyText'>
                    An exposome is the sum of all physical exposures that an individual is exposed to. This includes
                    an individual's geographic surroundings in addition to their physical attributes.
                </div>
                <br />
                <div>
                    <button className='toolButtonS' onClick={this.handleBackClick}>Go Back</button>
                </div>
            </div>
        );
    }

}

export default WhatIs;