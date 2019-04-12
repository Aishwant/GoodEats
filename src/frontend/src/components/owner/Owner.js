import React, { Component } from 'react'
import Restaurant_Owner from './Restaurant_Owner'
import OwnerPendingOrder from './OwnerPendingOrder';



export default class Owner extends Component {
  render() {

    return (
      <div className="row">
        <div className="col-md-12">
          <h1>Welcome {this.props.name}</h1>
  
        </div>
        
          <Restaurant_Owner />
      </div>
    )
  }
}
