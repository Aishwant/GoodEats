import React, { Component } from 'react'
import { connect } from "react-redux"

import {Tabs,Tab} from 'react-bootstrap';

import DriverPlacedOrder from './DriverPlacedOrder';
import DriverCurrentOrders from './DriverCurrentOrders';
import DriverDeliveryHistory from './DriverDeliveryHistory';
import { addPendingDevOrder } from '../../actions/orders';

import * as firebase from 'firebase';


export class Driver extends Component {


  state = {
    key: 'newOrder',
  };

  componentDidMount(){

    const orderRef = firebase.database().ref().child('Orders');
    orderRef.on('value', snap => {
      this.props.addPendingDevOrder(snap.val())
    })
  }
  render() {
    return (
      <div className="container h-100 align-items-center driver-tabs">
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



export default connect(null, { addPendingDevOrder })(Driver)