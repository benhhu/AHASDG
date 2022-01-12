import React, { Component } from 'react';

import AppConstants from '../../AppConstants.js';

import '../../Exposome.app.css';

class About extends Component {

    handleBackClick = () => {
        this.props.buttonHandler(AppConstants.OP_SHOW_HOME);
        this.props.changePanelHandler(AppConstants.PAGE_HOME);
    }

    render() {
        return(
            <div className='mainPanel'>
                <div className='introText'>
                    About Exposome.app
                </div>
                <div className='bodyText'>
                    This application was created by the Precision HeaLth ANd Exposome (PLANE) Lab.
                    <br /><br />
                    Exposome.app does not save any personal location data that is supplied by the user to the application.
                    <br /><br />
                    Source code (C) PLANE Lab 2021 
                </div>
                <br />
                <div>
                    <button className='toolButtonS' onClick={this.handleBackClick}>Go Back</button>
                </div>
            </div>
        );
    }

}

export default About;