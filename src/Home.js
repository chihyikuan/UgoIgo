import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "./Home.css"
class Home extends Component {
    renderText = () => {
        let a = <div>今天是2017年9月8號，也是妳26歲的生日，生日快樂! </div>
        let b = <div>今天是2017年9月8號，也是我們在一起的第2033天! </div>
        let c = <div>2012年9月8號，我們在一起後妳的第一個生日，還記得我們在哪嗎?</div>
        let d = <div>2012年9月8號，答案是這個!!</div>
     
    }

    render() {
        return (
            <div id="Home">
                今天是2017年9月8號，也是妳26歲的生日
            </div>
        );
    }
}

Home.propTypes = {

};

export default Home;