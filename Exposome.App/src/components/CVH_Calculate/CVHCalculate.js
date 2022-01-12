import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import axios from 'axios';

import AppConstants from '../../AppConstants.js';

import '../../Exposome.app.css';

axios.interceptors.request.use(
    config => {
        config.headers.Authorization = 'Basic ' + btoa('dashboard:PassW0rd123$%^');
        return config;
    },
    error => Promise.reject(error)
)

class CVHCalculate extends Component {

    state = {
        age: undefined,
        gender: undefined,
        race: undefined,
        weight: undefined,
        height: undefined,
        hbp: undefined,
        onBpMeds: undefined,
        smokeYN: undefined,
        prediction: undefined,
    }

    handleBackClick = () => {
        this.props.buttonHandler(AppConstants.OP_SHOW_CVH);
        this.props.changePanelHandler(AppConstants.PAGE_CVH);
    }

    handleCalculateClick = () => {
        if ((this.state.age === undefined) ||
            (this.state.gender === undefined) ||
            (this.state.race === undefined) ||
            (this.state.weight === undefined) ||
            (this.state.height === undefined) ||
            (this.state.hbp === undefined) ||
            (this.state.onBpMeds === undefined) ||
            (this.state.smokeYN === undefined)) {
            alert('One or more field values are missing!');
        } else {
            let bp;
            if (this.state.hbp === 'n') {
                bp = 2;
            } else if ((this.state.hbp === 'y') && (this.state.onBpMeds === true)) {
                bp = 1;
            } else {
                bp = 0;
            }

            let smoke;
            if (this.state.smokeYN === 'y') {
                smoke = 1;
            } else {
                smoke = 3;
            }

            axios({
                url: 'https://exposome.app/exposome-api/cvhmodel',
                method: 'GET',
                params: {
                    weight: this.state.weight,
                    height: this.state.height,
                    age: this.state.age,
                    race: this.state.race,
                    gender: this.state.gender,
                    smoke: smoke,
                    bp: bp,
                }
            }).then(result => {
                alert(result.data);
            })
        }
    }

    updateAge = (event) => {
        this.setState({
            age: event.target.value,
        });
    }
    
    updateGender = (event) => {
        this.setState({
            gender: event.target.value,
        });
    }

    updateRace = (event) => {
        this.setState({
            race: event.target.value,
        });
    }

    updateSmokeYN = (event) => {
        this.setState({
            smokeYN: event.target.value,
        });
    }

    updateWeight = (event) => {
        this.setState({
            weight: event.target.value,
        });
    }

    updateHeight = (event) => {
        this.setState({
            height: event.target.value,
        });
    }

    updateBp = (event) => {
        this.setState({
            hbp: event.target.value,
        });
    }

    updateBpMeds = (event) => {
        this.setState({
            onBpMeds: event.target.value,
        });
    }

    render() {
        return(
            <div className='mainPanel'>
                <div className='introText'>
                    Cardiovascular Health (CVH)
                </div>
                <div className='bodyText'>
                    Enter your information below:
                    <br /><br />
                    <Grid container spacing={2} >
                        <Grid item xs={4}>
                            Age:
                        </Grid>
                        <Grid item xs={8}>
                            <input type='text' onChange={this.updateAge} />
                        </Grid>
                        <Grid item xs={4}>
                            Gender:
                        </Grid>
                        <Grid item xs={8}>
                            <select onChange={this.updateGender}>
                                <option value=''></option>
                                <option value='1'>Male</option>
                                <option value='2'>Female</option>
                            </select>
                        </Grid>
                        <Grid item xs={4}>
                            Race:
                        </Grid>
                        <Grid item xs={8}>
                            <select onChange={this.updateRace}>
                                <option value=''></option>
                                <option value='1'>Non-Hispanic White</option>
                                <option value='2'>Non-Hispanic Black</option>
                                <option value='3'>Hispanic</option>
                                <option value='4'>Other</option>
                            </select>
                        </Grid>
                        <Grid item xs={4}>
                            Weight (lbs):
                        </Grid>
                        <Grid item xs={8}>
                            <input type='text' onChange={this.updateWeight} />
                        </Grid>
                        <Grid item xs={4}>
                            Height (in):
                        </Grid>
                        <Grid item xs={8}>
                            <input type='text' onChange={this.updateHeight} />
                        </Grid>
                        <Grid item xs={4}>
                            Are you a current smoker?
                        </Grid>
                        <Grid item xs={8}>
                            <select onChange={this.updateSmokeYN}>
                                <option value=''></option>
                                <option value='y'>Yes</option>
                                <option value='n'>No</option>
                            </select>
                        </Grid>
                        <Grid item xs={4}>
                            Do you have high blood pressure?
                        </Grid>
                        <Grid item xs={8}>
                            <select onChange={this.updateBp}>
                                <option value=''></option>
                                <option value='y'>Yes</option>
                                <option value='n'>No</option>
                            </select>
                        </Grid>
                        <Grid item xs={4}>
                            Are you on BP meds?
                        </Grid>
                        <Grid item xs={8}>
                            <select onChange={this.updateBpMeds}>
                                <option value=''></option>
                                <option value='y'>Yes</option>
                                <option value='n'>No</option>
                            </select>
                        </Grid>
                    </Grid>
                </div>
                <br />
                <div>
                    <button className='toolButtonS' onClick={this.handleCalculateClick}>Calculate Risk</button>
                    <br />
                    <button className='toolButtonS' onClick={this.handleBackClick}>Go Back</button>
                </div>
            </div>
        );
    }

}

export default CVHCalculate;