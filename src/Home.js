import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "./Home.css"
class Home extends Component {
    state = {
        showText: null
    }


    componentWillMount() {
        this.renderText()
    }
    
   
    
    renderText = () => {
        let a = <div key="a" className="text">今天是2017年9月8號，也是妳26歲的生日，生日快樂! </div>
        let b = <div key="b" className="text">也是我們在一起的第2033天! </div>
        let c = <div key="c" className="text">2012年9月8號，我們在一起後妳的第一個生日，還記得我們在哪嗎?</div>
        let d = <div key="d" className="text">2012年9月8號，答案是這個!!</div>
        let e = <div key="e" className="text">五年前我跟家人去，五年後你跟家人去，那下次我們一起去吧!!</div>
        let f = <div key="f" className="text">所以快放進我們的To Do List裡去吧!!</div>

        setTimeout(() => {
            this.setState({ showText: a })
        }, 3000);

        setTimeout(() => {
            this.setState({ showText: b })

        }, 8000);

        setTimeout(() => {
            this.setState({ showText: c })
        }, 12000);

        setTimeout(() => {
            this.setState({ showText: d })
        }, 17000);

        setTimeout(() => {
            this.setState({ showText: e })
        }, 22000);

        setTimeout(() => {
            this.setState({ showText: f })
        }, 27000);
    }

    render() {
   
        return (
            <div id="Home">
                <div className="textBlock">
                    {this.state.showText}
                </div>
            </div>
        );
    }
}

Home.propTypes = {

};

export default Home;