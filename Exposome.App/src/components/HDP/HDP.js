import React, { Component } from 'react';

import AppConstants from '../../AppConstants.js';

import '../../Exposome.app.css';

class HDP extends Component {

    handleHdpClick = () => {
        this.props.buttonHandler(AppConstants.OP_SHOW_HDP2);
        this.props.changePanelHandler(AppConstants.PAGE_HDP2);
    }

    handleBackClick = () => {
        this.props.buttonHandler(AppConstants.OP_SHOW_EXPLORE);
        this.props.changePanelHandler(AppConstants.PAGE_EXPLORE);
    }

    render() {
        return(
            <div className='mainPanel'>
                <div className='introText'>
                    Hypertensive Diseases of Pregnancy
                </div>
                <div className='bodyText'>
                    Hypertension (often called "high blood pressure") is a condition in which the flow of blood through blood
                    vessels is high enough to cause damage to the walls of blood vessels. Over a long period of time, this can
                    lead to complex heart disease. In pregnant women, hypertensive diseases of pregnancy, such as gestational
                    hypertension and preeclampsia, can threaten the life of both the mother and the fetus.
                    <br /><br />
                    (stuff about HDP, what can increase risk of HDP?)
                </div>
                <br />
                <div>
                    <button className='toolButtonS' onClick={this.handleHdpClick}>Calculate your HDP Risk</button>
                    <br />
                    <button className='toolButtonS' onClick={this.handleBackClick}>Go Back</button>
                </div>
            </div>
        );
    }

}

export default HDP;