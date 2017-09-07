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
                <div className="next">Next</div>
                {this.state.isShowSlide ?
                    <Slide />
                    :
                    null
                }

            </div>
        );
    }
}

Home.propTypes = {

};

export default Home;