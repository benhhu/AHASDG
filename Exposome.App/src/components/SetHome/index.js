import React, { Component } from 'react';
import { Grid } from '@material-ui/core';

import AppConstants from '../../AppConstants.js';
import APIConfig from '../MapControl/MapConfig.js';
import StateDropDown from './StateDropDown.js';

import '../../Exposome.app.css';

export default class SetLocation extends Component {
    
    state = {
        addressMethod: '',
        address1: '',
        city: '',
        state: '',
        zip: '',
        hasValidGeocode: false,
        geocodeCoords: null,
        hasGeocodePin: false,
    }

    handleHomeClick = () => {
        this.props.buttonHandler(AppConstants.OP_SHOW_HOME);
        this.props.changePanelHandler(AppConstants.PAGE_HOME);
    }

    handleGpsClick = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                var geocodeCoords = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                };
                this.props.sendEventToMapHandler(AppConstants.OP_SET_HOME, geocodeCoords);
                this.setState({
                    geocodeCoords: geocodeCoords,
                    hasValidGeocode: true,
                });
            });
        } else {
            alert('Unable to find current location using GPS. Please use another method.');
            this.setState({
                hasValidGeocode: false,
            })
        }
    }

    handleGeocodeClick = () => {
        var addressStr = this.state.address1 + ', ' + this.state.city + ', ' + this.state.state + ' ' + this.state.zip;
        
        var url = AppConstants.URL_GEOCODE.replace('{key}', APIConfig.key)
            .replace('{address}', addressStr);
        fetch(url).then(response => response.json()).then(data => {
            if (data.status === 'OK') {
                var geocodeLat = data.results[0].geometry.location.lat;
                var geocodeLng = data.results[0].geometry.location.lng;
                var geocodeCoords = {
                    lat: geocodeLat,
                    lng: geocodeLng,
                };
                this.props.sendEventToMapHandler(AppConstants.OP_SET_GEOCODE, geocodeCoords);
                this.setState({
                    geocodeCoords: geocodeCoords,
                    hasValidGeocode: true,
                })
            } else {
                alert('Could not geocode this address. Please try a different address');
            }
        });
    }

    handleSetHomeClick = () => {
        if (this.state.addressMethod === 'address') {
            if (this.state.geocodeCoords != null) {
                this.props.sendEventToMapHandler(AppConstants.OP_SET_HOME, this.state.geocodeCoords);
            } else {
                alert('Please geocode an address or click the map to set your home');
            }
        } else if (this.state.addressMethod === 'map') {
            if (this.props.mapEvent != null) {
                this.props.sendEventToMapHandler(AppConstants.OP_SET_HOME, this.props.mapEvent);
            } else {
                alert('Please click the map to place a marker on your home');
            }
        }
    }

    updateAddress = (event) => {
        this.setState({
            address1: event.target.value,
        })
    }

    updateCity = (event) => {
        this.setState({
            city: event.target.value,
        })
    }

    updateState = (event) => {
        this.setState({
            state: event.target.value,
        })
    }

    updateZIP = (event) => {
        this.setState({
            zip: event.target.value,
        });
    }

    handleMethodChange = (event) => {
        this.setState({
            addressMethod: event.target.value,
        });
    }

    AddressForm() {
        return(
            <div> 
                <Grid container spacing={1}>
                    <Grid item xs={4}>
                        Address:
                    </Grid>
                    <Grid item xs={8}>
                        <input type='text' onChange={this.updateAddress} />
                    </Grid>
                    <Grid item xs={4}>
                        City:
                    </Grid>
                    <Grid item xs={8}>
                        <input type='text' onChange={this.updateCity} />
                    </Grid>
                    <Grid item xs={4}>
                        State:
                    </Grid>
                    <Grid item xs={8}>
                        <StateDropDown onChange={this.updateState} />
                    </Grid>
                    <Grid item xs={4}>
                        ZIP Code:
                    </Grid>
                    <Grid item xs={8}>
                        <input type='text' onChange={this.updateZIP} />
                    </Grid>
                    <Grid item xs={6}>
                        <button className='toolButtonS' onClick={this.handleGeocodeClick} >Show Address Location</button>
                    </Grid>
                    <Grid item xs={6}>
                        <button className='toolButtonS' onClick={this.handleSetHomeClick} >Set Address as Home</button>
                    </Grid>
                </Grid>               
            </div>
        );
    }

    GpsForm() {
        let formText = '';
        let gpsButton = '';
        if (navigator.geolocation) {
            formText = 'The app can set your home location using your current GPS location.';
            gpsButton = <button className='toolButtonS' onClick={this.handleGpsClick} >Set Home using GPS</button>
        } else {
            formText = 'Your browser or device does not support the use of GPS location detection. Please use another method.';
        }
        return (
            <div>
                {formText}
                <br /><br />
                {gpsButton}
            </div>
        );
    }

    MapClickDisplayForm() {
        return(
            <div>
                Pan/Zoom the map and then click to set your home location.<br />
                <br />
                <button className='toolButtonS' onClick={this.handleSetHomeClick} >Set Marker as Home</button>
            </div>
        );
    }

    render() {
        let locationForm = '';
        if (this.state.addressMethod === 'address') {
            locationForm = this.AddressForm();
        } else if (this.state.addressMethod === 'gps') {
            locationForm = this.GpsForm();
        } else if (this.state.addressMethod === 'map') {
            locationForm = this.MapClickDisplayForm();
        }

        return(
            <div className='mainPanel'>
                <div className='introText'>
                    Set your Location
                </div>
                <div className='bodyText'>
                    The app will calculate certain exposures based on your set home location. Use this form to
                    set your home location using either your address, a map click, or your device's GPS.
                </div>
                <div className='locationForm'>
                    <Grid container spacing={1}>
                        <Grid item xs={4}>
                            Method:
                        </Grid>
                        <Grid item xs={8}>
                            <select defaultValue='' id='addressMethod' onChange={this.handleMethodChange}>
                                <option value=''></option>
                                <option value='address'>Enter Address</option>
                                <option value='gps'>Use GPS</option>
                                <option value='map'>Use Map</option>
                            </select>
                        </Grid>
                    </Grid>
                    {locationForm}
                </div>
                <br />
                <div>
                    <button className='navButton' onClick={this.handleHomeClick}>Back to Main Page</button>
                </div>
            </div>
        )
    }

}