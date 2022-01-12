import React, {Component} from 'react';

import GoogleMapReact from 'google-map-react';
import MapConfig from './MapConfig.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faHome } from '@fortawesome/free-solid-svg-icons';

import './MapControl.css';

export default class MapControl extends Component {

    render() {
        //  Geocoded location marker
        let geocodeMarker = '';
        if (this.props.geocodeCoords != null) {
            geocodeMarker = <div lat={this.props.geocodeCoords.lat} 
                                lng={this.props.geocodeCoords.lng}
                                text='Geocoded Location'>
                    <FontAwesomeIcon icon={faMapMarkerAlt} size='3x' color='red' />
                </div>
        } else {
            geocodeMarker = '';
        }

        //  Home location marker
        let homeMarker = '';
        if (this.props.homeCoords != null) {
            homeMarker = <div lat={this.props.homeCoords.lat}
                                lng={this.props.homeCoords.lng}
                                text='My Location'>
                    <FontAwesomeIcon icon={faHome} size='4x' color='blue' />
                </div>
        }

        return (
            <div className='mapControl'>
                <GoogleMapReact 
                    bootstrapURLKeys={{ key: MapConfig.key }}
                    defaultCenter={this.props.center} defaultZoom={this.props.zoom}
                    center={this.props.center} zoom={this.props.zoom}
                    yesIWantToUseGoogleMapApiInternals
                    onClick={this.props.mapClickHandler}
                >  
                    {geocodeMarker} 
                    {homeMarker}   
                </GoogleMapReact>
            </div>
        );
        
    }

}