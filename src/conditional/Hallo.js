import React, { Component } from 'react'
import Home from './Home'
import Login from './Login'

export default class Hallo extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      first : true
    }
   
  }

  render() {
    const { first } = this.state
    return (
      <>
      {first && <Home />}
      </>
 )
    
  }
}
