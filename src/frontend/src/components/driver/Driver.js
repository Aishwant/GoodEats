import React, { Component } from 'react'

import DriverPlacedOrder from "./DriverPlacedOrder";
import {Link }from 'react-router-dom';
import { Row } from 'mdbreact';


export default class Driver extends Component {
  render() {
    return (
      <div class="container">
        <h1 style= {{textAlign:'center'}}>Welcome {this.props.name}</h1> 
      <div class="row">
      <div class="col"style={{width:'10%'}}>
      <Link to={`/pendingOrders`}>
      <button type="button" class="btn btn-success btn-sm" style={{width:'100%'}}>Pending Delivery Orders</button>
      </Link> 
      </div>
      <div class="col">
      <button  class="btn btn-success btn-sm" style={{width:'100%'}}>New Unaccepted Order</button>
     
      <DriverPlacedOrder />
      </div>
      <div class="col"style={{width:'10%'}}>
      <Link to={`/deliveryHistory`}>
            <button type="button" class="btn btn-success btn-sm" style={{width:'100%'}}>Delivery History</button> 
      </Link>
      </div>

            
            
      </div>

        </div>
  
      
    )
  }
}
