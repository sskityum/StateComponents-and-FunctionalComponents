import React, { Component } from 'react'
import './style.css'


export default class App extends Component {

    state = {
        synchronousText: '',
        numberKeystrokes: 0
    }

    handlerInput = (event) => {
        this.setState({
            synchronousText: event.target.value,
            numberKeystrokes: this.state.numberKeystrokes + 1
        })
    }

    render() {

        return (
            <div className="App">
                <h1>{this.state.synchronousText}</h1>

                <input type="text" onChange={this.handlerInput} />

                <h1>{this.state.numberKeystrokes}</h1>

            </div>
        )
    }
}