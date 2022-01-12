import React, { Component } from 'react';

import '../../Exposome.app.css';

class HomeInfoPanel extends Component {

    render() {
        return(
            <div className='mainPanel'>
                <div className='introText'>
                    Home Coordinates
                </div>
                <div className='coordsDisplay'>
                    {this.props.homeCoords ? ('Home: (' + this.props.homeCoords.lng + ', ' + this.props.homeCoords.lat + ')') : ('Home: not set')}
                    <br />
                    {this.props.geocodeCoords ? ('Geocode: (' + this.props.geocodeCoords.lng + ', ' + this.props.geocodeCoords.lat + ')') : ('')}
                </div>
            </div>
        );
    }

}

export default HomeInfoPanel;