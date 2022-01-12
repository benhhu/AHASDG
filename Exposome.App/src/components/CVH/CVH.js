import React, { Component } from 'react';

import AppConstants from '../../AppConstants.js';

import '../../Exposome.app.css';

class CVH extends Component {

    handleCvhClick = () => {
        this.props.buttonHandler(AppConstants.OP_SHOW_CVH2);
        this.props.changePanelHandler(AppConstants.PAGE_CVH2);
    }
    
    handleBackClick = () => {
        this.props.buttonHandler(AppConstants.OP_SHOW_EXPLORE);
        this.props.changePanelHandler(AppConstants.PAGE_EXPLORE);
    }

    render() {
        return(
            <div className='mainPanel'>
                <div className='introText'>
                    Cardiovascular Health (CVH)
                </div>
                <div className='bodyText'>
                    Cardiovascular health is the health of your heart and the blood vessels that circulate blood throughout
                    your body.
                    <br /><br />
                    (stuff about CVH, what increases your risk for CVH?)
                </div>
                <br />
                <div>
                    <button className='toolButtonS' onClick={this.handleCvhClick}>Calculate your CVH Risk</button>
                    <br />
                    <button className='toolButtonS' onClick={this.handleBackClick}>Go Back</button>
                </div>
            </div>
        );
    }

}

export default CVH;