import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "./Home.css"
import Slide from "./Slide"
class Home extends Component {
    state = {
        isShowSlide: false
    }
    render() {

        return (
            

                <div id="Home">
                    {this.state.isShowSlide ?
                        <Slide onCloseSlide={() => { this.setState({ isShowSlide: false }) }} />
                        :
                        <div className="next" onClick={() => { this.setState({ isShowSlide: true }) }}></div>
                    }
                </div>

            
        );
    }
}

Home.propTypes = {

};

export default Home;