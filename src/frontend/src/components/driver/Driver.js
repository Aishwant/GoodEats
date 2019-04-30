import React, { Component, Fragment } from 'react'
import { connect } from "react-redux"

import {Tabs,Tab} from 'react-bootstrap';

import DriverPlacedOrder from './DriverPlacedOrder';
import DriverCurrentOrders from './DriverCurrentOrders';
import DriverDeliveryHistory from './DriverDeliveryHistory';
import { addPendingDevOrder, addOnDevOrder, addDeliveredOrder  } from '../../actions/orders';

import * as firebase from 'firebase';


export class Driver extends Component {


  state = {
    key: 'newOrder',
  };

  componentDidMount(){

    const rootRef = firebase.database().ref()
    const toDevRef = rootRef.child('Orders').child('ToBeDev');
    toDevRef.on('value', snap => {
      if(snap.val()) this.props.addPendingDevOrder(snap.val())
    })
    const uId = localStorage.getItem("uID")+"";
    const onDevRef = rootRef.child('Orders').child('OnDev').child(uId);
    onDevRef.on('value', snap => {
      if(snap.val()) this.props.addOnDevOrder(snap.val())
    })

    const devRef = rootRef.child("Users").child(uId).child("Driver").child("Devlivered");
    devRef.on('value', snap => {
      if(snap.val()) this.props.addDeliveredOrder(snap.val())
    })
  }
  render() {
    return (
      <Fragment>
        <h1 style={{marginBottom: "20px"}}>Welcome {this.props.name}</h1>
        
        <Fragment className="h-100 align-items-center driver-tabs">
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
        </Fragment>
      </Fragment>
    );
  }
}



export default connect(null, { addPendingDevOrder, addOnDevOrder, addDeliveredOrder })(Driver)
