import React, { Component } from 'react';

import AppConstants from '../../AppConstants.js';

import '../../Exposome.app.css';

class HDPCalculate extends Component {

    handleBackClick = () => {
        this.props.buttonHandler(AppConstants.OP_SHOW_HDP);
        this.props.changePanelHandler(AppConstants.PAGE_HDP);
    }

    render() {
        return(
            <div className='mainPanel'>
                <div className='introText'>
                    Hypertensive Diseases of Pregnancy
                </div>
                <div className='bodyText'>
                    Enter your information below:
                    <br /><br />
                </div>
                <br />
                <div>
                    <button className='toolButtonS' onClick={this.handleBackClick}>Go Back</button>
                </div>
            </div>
        );
    }

}

export default HDPCalculate;