import React, { Component } from 'react'
import Restaurant_Owner from './Restaurant_Owner'

export default class Owner extends Component {
  render() {
    return (
      <div>
        <h1>Welcome {this.props.name}</h1>
        <br />
        <Restaurant_Owner />
      </div>
    )
  }
}
