import React, { Component } from 'react'
import Restaurant from '../customer/Restaurant'

export default class Owner extends Component {
  render() {
    return (
      <div>
        <h1>Welcome {this.props.name}</h1>
        <br />
        <Restaurant />
      </div>
    )
  }
}
