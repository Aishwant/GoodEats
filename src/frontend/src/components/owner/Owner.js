import React, { Component } from 'react'
import Restaurant_Owner from './Restaurant_Owner'
import FormRestaurant from './FormRestaurant'

export default class Owner extends Component {
  render() {
    return (
      <div>
        <h1>Welcome {this.props.name}</h1>
        <FormRestaurant />
        <br />
        <Restaurant_Owner />
      </div>
    )
  }
}
