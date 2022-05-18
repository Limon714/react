import React, { Component } from 'react'

export default class Binding extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       count : 0
    }
  }
  handClick = () => {
    this.setState({
      count : this.state.count + 1
    })
  }
  handClick2 = () => {
    this.setState({
      count : this.state.count - 1
    })
  }
  
  render() {
    return (
      <div>
        Binding Me why
        <br />
        <h1>{this.state.count}</h1>
        <button onClick={this.handClick}>Increase</button>
        <button onClick={this.handClick2}>Decrease</button> 
      </div>
    )
  }
}
