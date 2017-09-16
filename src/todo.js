import React, { Component } from 'react';
import "./todo.css"
class Todo extends Component {
    constructor() {
        super()
        this.state = {
            inputValue: "",
            todoList: [],
        }
    }

    handleInput = (v) => {
        this.setState({
            inputValue: v
        })
    }

    handleSave = () => {

        let { todoList } = this.state
        todoList.push(this.state.inputValue)
        this.setState({
            todoList
        })
    }
    render() {
        let { todoList } = this.state
        let showlist = todoList.map((todo) => {
            return <li>
                {todo}
            </li>
        })
        return (
            <div id="todo">

                <input type="text" value={this.state.inputValue} onChange={(e) => { this.handleInput(e.target.value) }} />
                <div className="save" onClick={this.handleSave}>ToDo</div>
                <ul>
                    {showlist}
                </ul>
            </div>
        );
    }
}

export default Todo;