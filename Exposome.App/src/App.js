import React, { Component } from 'react';

import MapControl from './components/MapControl/MapControl.js';
import MainPanel from './components/MainPanel/MainPanel.js';
import HomeInfoPanel from './components/HomeInfoPanel/HomeInfoPanel.js';
import AppConstants from './AppConstants.js';
import MapConfig from './components/MapControl/MapConfig.js';

import { Grid } from '@material-ui/core';
import './Exposome.app.css';

class App extends Component {

  state = {
    mainPanelCurrentComponent: AppConstants.PAGE_HOME,
    mapCenter: MapConfig.defaultCenter,
    mapZoom: 7,
    isPanelMapListenerActive: false,
    geocodeCoords: null,
    homeCoords: null,
    mapEvent: {},
  }

  handlePanelClick = (op) => {
    switch(op) {
      case AppConstants.OP_SHOW_HOME:
        this.setState({
          mainPanelCurrentComponent: AppConstants.PAGE_HOME,
          isPanelMapListenerActive: false,
        });
        break;
      case AppConstants.OP_SHOW_WHATIS:
        this.setState({
          mainPanelCurrentComponent: AppConstants.PAGE_WHATIS,
          isPanelMapListenerActive: false,
        });
        break;
      case AppConstants.OP_SHOW_HDP:
        this.setState({
          mainPanelCurrentComponent: AppConstants.PAGE_HDP,
          isPanelMapListenerActive: false,
        });
        break;
      case AppConstants.OP_SHOW_HDP2:
        this.setState({
          mainPanelCurrentComponent: AppConstants.PAGE_HDP2,
          isPanelMapListenerActive: false,
        });
        break;
      case AppConstants.OP_SHOW_SET_LOCATION:
        this.setState({
          mainPanelCurrentComponent: AppConstants.PAGE_SET_LOCATION,
          isPanelMapListenerActive: true,
        });
        break;
      case AppConstants.OP_SHOW_CVH:
        this.setState({
          mainPanelCurrentComponent: AppConstants.PAGE_CVH,
          isPanelMapListenerActive: false,
        });
        break;
      case AppConstants.OP_SHOW_CVH2:
        this.setState({
          mainPanelCurrentComponent: AppConstants.PAGE_CVH2,
          isPanelMapListenerActive: false,
        });
        break;
      case AppConstants.OP_SHOW_ABOUT:
        this.setState({
          mainPanelCurrentComponent: AppConstants.PAGE_ABOUT,
          isPanelMapListenerActive: false,
        });
        break;
      default:
        this.setState({
          mainPanelCurrentComponent: AppConstants.PAGE_HOME,
          isPanelMapListenerActive: true,
        });
        break;
    }
  }

  handleMapClick = (event) => {
    if (this.state.isPanelMapListenerActive) {
      this.setState({
        geocodeCoords: {
          lat: Math.round(event.lat * 1000000) / 1000000,
          lng: Math.round(event.lng * 1000000) / 1000000,
        },
        mapEvent: {
          eventType: AppConstants.MAP_EVENT_TYPE_CLICK,
          lat: Math.round(event.lat * 1000000) / 1000000,
          lng: Math.round(event.lng * 1000000) / 1000000,
        },
      });
    }
  }

  sendEventToMap = (op, args) => {
    switch(op) {
      case AppConstants.OP_SET_GEOCODE:
        this.setState({
          geocodeCoords: args,
          mapCenter: args,
          mapZoom: 15,
        });
        break;
      case AppConstants.OP_SET_HOME:
        this.setState({
          geocodeCoords: null,
          homeCoords: args,
          mapCenter: args,
          mapZoom: 15,
        });
        break;
      default:
        break;
    }
  }

  render() {
    return (
      <div className="App">
        <Grid container spacing={0}>
          <Grid item xs={3}>
            <Grid container spacing={0}>
              <Grid item xs={12}>
                <MainPanel currentComponent={this.state.mainPanelCurrentComponent}
                  buttonHandler={this.handlePanelClick}
                  sendEventToMapHandler={this.sendEventToMap}
                  homeCoords={this.state.homeCoords}
                  mapEvent={this.state.mapEvent} />
              </Grid>
              <Grid item xs={12}>
                <HomeInfoPanel 
                  homeCoords={this.state.homeCoords}
                  geocodeCoords={this.state.geocodeCoords}  
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={9}>
            <MapControl center={this.state.mapCenter} zoom={this.state.mapZoom}
              geocodeCoords={this.state.geocodeCoords} 
              homeCoords={this.state.homeCoords}
              mapClickHandler={this.handleMapClick} />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
