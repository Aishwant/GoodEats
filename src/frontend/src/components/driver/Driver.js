import React, { Component } from 'react'

import DriverPlacedOrder from './DriverPlacedOrder';
import {Link }from 'react-router-dom';
import {Tabs,Tab} from 'react-bootstrap';



export default class Driver extends Component {

  
  constructor(props) {
    super(props);
    this.state = {
      key: 1
    };
   this.handleSelect = this.handleSelect.bind(this)
  }
  handleSelect(key) {
   
    this.setState({key});
  }
  render () {
    return (
      <div>
        <Tabs activeKey={this.state.key} onSelect={this.handleSelect} 
         id="controlled-tab-example">
                <Tab eventKey={1} title="New Order"><DriverPlacedOrder/> </Tab>
                <Tab eventKey={2} title="Pending Order"> <DriverPlacedOrder/></Tab>
                <Tab eventKey={3} title="Delivery History"> <DriverPlacedOrder/></Tab>
        </Tabs>

      </div>
    )
   }
  }