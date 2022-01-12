import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle, faInfoCircle, faHome, faList } from '@fortawesome/free-solid-svg-icons';

import AppConstants from '../../AppConstants.js';

import '../../Exposome.app.css';

export default class Home extends Component {

    handleWhatIsClick = () => {
        this.props.buttonHandler(AppConstants.OP_SHOW_WHATIS);
        this.props.changePanelHandler(AppConstants.PAGE_WHATIS);
    }
    
    handleExploreClick = () => {
        this.props.buttonHandler(AppConstants.OP_SHOW_EXPLORE);
        this.props.changePanelHandler(AppConstants.PAGE_EXPLORE);
    }

    handleSetLocationClick = () => {
        this.props.buttonHandler(AppConstants.OP_SHOW_SET_LOCATION);
        this.props.changePanelHandler(AppConstants.PAGE_SET_LOCATION);
    }

    handleAboutClick = () => {
        this.props.buttonHandler(AppConstants.OP_SHOW_ABOUT);
        this.props.changePanelHandler(AppConstants.PAGE_ABOUT);
    }

    render() {
        return (
            <div className='mainPanel'>
                <div className='introText'>
                    EXPOSOME.APP
                </div>
                <div className='bodyText'>
                    Explore your physical and environmental exposures and how they affect your health. 
                </div>
                <br />
                <div>
                    <Grid container spacing={2}>
                        <Grid item xs={4} >
                            <button className='toolButton' onClick={this.handleWhatIsClick} >
                                <FontAwesomeIcon icon={faInfoCircle} size="2x" color="#66ff66" /><br /><br />
                                What is an Exposome?
                            </button>
                        </Grid>
                        <Grid item xs={4} >
                            <button className='toolButton' onClick={this.handleExploreClick}>
                                <FontAwesomeIcon icon={faList} size="2x" color="#ff00dd" /><br /><br />
                                Explore Data
                            </button>
                        </Grid>
                        <Grid item xs={4} >
                            <button className='toolButton' onClick={this.handleSetLocationClick}>
                                <FontAwesomeIcon icon={faHome} size="2x" /><br /><br />
                                Set your Location
                            </button>
                        </Grid>
                        <Grid item xs={4} >
                            <button className='toolButton' onClick={this.handleAboutClick} >
                                <FontAwesomeIcon icon={faQuestionCircle} size="2x" color="#0000ff" /><br /><br />
                                About this App
                            </button>
                        </Grid>
                    </Grid>
                    
                    
                    
                    
                </div>
            </div>
        )
    }

}

