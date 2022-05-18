import React, { Component } from 'react'
import './step.css'

export default class State extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
        hello : 0
          
      }
    }
    increment = () => {
        this.setState({
            hello : this.state.hello + 1
        })
    }
decrement = () => {
        this.setState({
            hello : this.state.hello - 1
        })
    }

  render() {
      const {hello} = this.state
    return (
        <div>
            <h1> Count Me:  {hello} </h1>
            <button onClick={this.increment} disabled={hello === 20 ? true : false}>+</button>
            <button onClick={this.decrement} disabled ={hello === 0 ?  true : false}>-</button>
        </div>
    )
  }
}
