import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Todo from './todo'
class Slide extends Component {
    state = {
        showText: null,
        isShowTodo:false
    }


    componentWillMount() {
        this.renderText()
    }



    renderText = () => {
        let a =
            <div onClick={() => { this.setState({ showText: b }) }} key="a" className="text">
                今天是2017年9月8號，是妳26歲的生日
            <i className="fa fa-hand-pointer-o clickHint" aria-hidden="true"></i>
            </div>
        let b =
            <div onClick={() => { this.setState({ showText: c }) }} key="b" className="text">
                也是我們在一起的第2033天!
           
            </div>
        let c =
            <div onClick={() => { this.setState({ showText: d }) }} key="c" className="text">
                2012年9月8號，<br /> 我們在一起後妳的第一個生日，<br />還記得我們在哪嗎?
               
            </div>
        let d =
            <div onClick={() => { this.setState({ showText: e }) }} key="d" className="text">答案是這裡!!
               
                <img className="slideImg" src="image/20120908.PNG" />
            </div>
        let e =
            <div onClick={() => { this.setState({ showText: f }) }} key="e" className="text">
                五年前我跟家人去，五年後你跟家人去，<br />那我們什時候一起去呢?
           
            </div>
        let f = <div onClick={() => { this.setState({isShowTodo:true})}} key="f" className="text">
            快放進我們的To Do List裡去吧!!
           
        </div>

        setTimeout(() => {
            this.setState({ showText: a })
        }, 1000);


    }
    render() {
        return (
            <div className="textBlock">
               
                {this.state.isShowTodo?
                    <Todo/>
                    :
                    this.state.showText
                }
            </div>
        );
    }
}

Slide.propTypes = {

};

export default Slide;