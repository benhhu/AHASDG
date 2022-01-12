import React, { Component } from 'react';
import AppConstants from '../../AppConstants.js';
import axios from 'axios';
import { Grid } from '@material-ui/core';

import '../../Exposome.app.css';

axios.interceptors.request.use(
    config => {
        config.headers.Authorization = 'Basic ' + btoa('dashboard:PassW0rd123$%^');
        return config;
    },
    error => Promise.reject(error)
)

export default class Explore extends Component {

    handleHomeClick = () => {
        this.props.buttonHandler(AppConstants.OP_SHOW_HOME);
        this.props.changePanelHandler(AppConstants.PAGE_HOME);
    }

    handleCvhClick = () => {
        this.props.buttonHandler(AppConstants.OP_SHOW_CVH);
        this.props.changePanelHandler(AppConstants.PAGE_CVH);
    }

    handleHdpClick = () => {
        this.props.buttonHandler(AppConstants.OP_SHOW_HDP);
        this.props.changePanelHandler(AppConstants.PAGE_HDP);
    }

    render() {
        return(
            <div className='mainPanel'>
                <div className='introText'>
                    Explore Data
                </div>
                <br />
                <div className='bodyText'>
                    Exposome.app allows you to explore multiple health conditions and how your exposome
                    affects your risk. Select a condition below to learn more.    
                </div>
                <br />
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <button className='toolButton' onClick={this.handleCvhClick} >
                            Cardiovascular Health (CVH)
                        </button>
                    </Grid>
                    <Grid item xs={4}>
                        <button className='toolButton' onClick={this.handleHdpClick} >
                            Hypertensive Diseases of Pregnancy (HDP)
                        </button>
                    </Grid>
                </Grid>
                <br />
                <div>
                    <button className='navButton' onClick={this.handleHomeClick}>Back to Main Page</button>
                </div>
            </div>
        )
    }

}