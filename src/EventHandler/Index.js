import React, { Component } from 'react'

export default class Index extends Component {
    clickme = () => {
    console.log("Click is working")
    }

    constructor(props) {
      super(props)
    
      this.state = {
         changesvalue : ''
      }
    }

    Changes = (e) => {
        this.setState({
            changesvalue : e.target.value
        }, () => {
            console.log(this.state.changesvalue)
         })
     }
  render() {
    return (
        <div>
            <input type="text" onChange={this.Changes} />
            <p>{this.state.changesvalue}</p>
            <br/>
            <button onClick={this.clickme}> Click Me</button>
            <p>{this.state.changesvalue}</p>
      </div>
    )
  }
}
