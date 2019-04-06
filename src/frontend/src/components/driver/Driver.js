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
    

       <ul class="nav nav-tabs nav-justified tabs indigo" id="myTabJust" role="tablist">
        <li class="nav-item">
          <a class="nav-link active" id="home-tab-just" data-toggle="tab" href="#home-just" role="tab" aria-controls="home-just"
            aria-selected="true"><i class="fas fa-shopping-bag"></i><br/>New Order</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="profile-tab-just" data-toggle="tab" href="#profile-just" role="tab" aria-controls="profile-just"
            aria-selected="false"><i class="fas fa-truck"></i><br/>Pending Order</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="contact-tab-just" data-toggle="tab" href="#contact-just" role="tab" aria-controls="contact-just"
            aria-selected="false"><i class="fas fa-history"></i><br/>Order History</a>
        </li>
      </ul>
      <div class="tab-content card pt-5" id="myTabContentJust">
        <div class="tab-pane fade show active" id="home-just" role="tabpanel" aria-labelledby="home-tab-just">
        <DriverPlacedOrder/>
        </div>
        <div class="tab-pane fade" id="profile-just" role="tabpanel" aria-labelledby="profile-tab-just">
        <DriverPlacedOrder/>
        </div>
        <div class="tab-pane fade" id="contact-just" role="tabpanel" aria-labelledby="contact-tab-just">
        <DriverPlacedOrder/>
        </div>
      </div>

      </div>
    )
   }
  }