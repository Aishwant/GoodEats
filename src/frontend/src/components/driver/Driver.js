import React, { Component } from 'react'

import DriverPlacedOrder from './DriverPlacedOrder';
import {Link }from 'react-router-dom';
import {Tabs,Tab} from 'react-bootstrap';
import DriverCurrentOrders from './DriverCurrentOrders';
import DriverDeliveryHistory from './DriverDeliveryHistory';



export default class Driver extends Component {


  constructor(props, context) {
    super(props, context);
    this.state = {
      key: 'newOrder',
    };
  }
  render() {
    return (
      <div className="container h-100 align-items-center">
      <Tabs 
        id="controlled-tab-example"
        activeKey={this.state.key}
        onSelect={key => this.setState({ key })}
        style={{width:'100%',flexGrow:1,backgroundColor:"#DOFOCO"}}
      >
        <Tab eventKey="newOrder" title={<span><i class="fas fa-shopping-bag fa-1x">New Order</i> </span>}>
        <DriverPlacedOrder/>
        </Tab>
        <Tab eventKey="currentOrder"  title={<span><i class="fas fa-truck fa-1x">Current Order</i></span>}>
        <DriverCurrentOrders/>
        </Tab>
        <Tab eventKey="orderHistory"  title={<span><i class="fas fa-history fa-1x">Order History</i> </span>}>
        <DriverDeliveryHistory/>
        </Tab>
      </Tabs>
      
      </div>
    );
  }
}