import React, { Component } from 'react'

import DriverPlacedOrder from './DriverPlacedOrder';
import {Link }from 'react-router-dom';
import {Tabs,Tab} from 'react-bootstrap';
import DriverCurrentOrders from './DriverCurrentOrders';
import DeliverHistoryCard from './DeliveryHistoryCard';
import DeliveryHistoryCard from './DeliveryHistoryCard';



export default class Driver extends Component {


  constructor(props, context) {
    super(props, context);
    this.state = {
      key: 'newOrder',
    };
  }
  render() {
    return (
      <div>
      <DriverPlacedOrder/>
      <DriverCurrentOrders/> 
      </div>
    )
  }}