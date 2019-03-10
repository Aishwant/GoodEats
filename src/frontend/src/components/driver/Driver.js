import React, { Component } from 'react'

export default class Driver extends Component {
  render() {
    return (
      <div>
        <h1>Welcome {this.props.name}</h1>
        <br />
      </div>
    )
  }
}
