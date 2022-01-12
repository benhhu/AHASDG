import React, { Component } from 'react';

import Home from '../Home/Home';
import WhatIs from '../WhatIs/WhatIs';
import Explore from '../Explore/Explore';
import SetHome from '../SetHome';
import HDP from '../HDP/HDP';
import HDPCalculate from '../HDP_Calculate/HDPCalculate';
import CVH from '../CVH/CVH';
import CVHCalculate from '../CVH_Calculate/CVHCalculate';
import About from '../About/About';

import AppConstants from '../../AppConstants.js';

import '../../Exposome.app.css';

class MainPanel extends Component {

    state = {
        currentComponent: this.props.currentComponent,
    }

    changePanelHandler = (newPanel) => {
        this.setState({
            currentComponent: newPanel,
        });
    }

    render() {
        switch (this.state.currentComponent) {
            case AppConstants.PAGE_HOME:
                return(
                    <Home buttonHandler={this.props.buttonHandler} 
                        changePanelHandler={this.changePanelHandler} />
                );
            case AppConstants.PAGE_WHATIS:
                return(
                    <WhatIs buttonHandler={this.props.buttonHandler} 
                        changePanelHandler={this.changePanelHandler} />
                );
            case AppConstants.PAGE_EXPLORE:
                return(
                    <Explore buttonHandler={this.props.buttonHandler}
                        changePanelHandler={this.changePanelHandler} />
                );
            case AppConstants.PAGE_SET_LOCATION:
                return(
                    <SetHome {...this.props}
                        changePanelHandler={this.changePanelHandler} />
                );
            case AppConstants.PAGE_HDP:
                return(
                    <HDP {...this.props}
                        changePanelHandler={this.changePanelHandler} />
                );
            case AppConstants.PAGE_HDP2:
                return(
                    <HDPCalculate {...this.props}
                        changePanelHandler={this.changePanelHandler} />
                );
            case AppConstants.PAGE_CVH:
                return(
                    <CVH {...this.props}
                        changePanelHandler={this.changePanelHandler} />
                );
            case AppConstants.PAGE_CVH2:
                return(
                    <CVHCalculate {...this.props}
                        changePanelHandler={this.changePanelHandler} />
                );
            case AppConstants.PAGE_ABOUT:
                return(
                    <About buttonHandler={this.props.buttonHandler} 
                        changePanelHandler={this.changePanelHandler} />
                );
            default:
                return null;
        }
    }
}

export default MainPanel;