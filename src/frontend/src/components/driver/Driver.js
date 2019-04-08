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
      <div className="Container">
      <Tabs 
        id="controlled-tab-example"
        activeKey={this.state.key}
        onSelect={key => this.setState({ key })}
        style={{width:'100%',flexGrow:1,backgroundColor:"#DOFOCO"}}
      >
    
        <Tab eventKey="newOrder" title={<span><i class="fas fa-shopping-bag fa-3x">New Order</i> </span>}>
        <br/>
        <DriverPlacedOrder/>
        </Tab>
        <Tab eventKey="currentOrder"  title={<span><i class="fas fa-truck fa-3x">Current Order</i></span>}>
        <br/>
        <DriverCurrentOrders/>
        </Tab>
        <Tab eventKey="orderHistory"  title={<span><i class="fas fa-history fa-3x">Order History</i> </span>}>
        <br/>
        <DriverDeliveryHistory/>
        </Tab>
      </Tabs>
      </div>
    );
  }
}



  

    

  //      <ul class="nav nav-tabs nav-justified tabs indigo" id="myTabJust" role="tablist">
  //       <li class="nav-item">
  //         <a class="nav-link active" id="NewOrder-tab-just" data-toggle="tab" href="#home-just" role="tab" aria-controls="home-just"
  //           aria-selected="true"><i class="fas fa-shopping-bag fa-3x"></i><br/>New Order</a>
  //       </li>
  //       <li class="nav-item">
  //         <a class="nav-link" id="OutForDelivey-tab-just" data-toggle="tab" href="#profile-just" role="tab" aria-controls="profile-just"
  //           aria-selected="false"><i class="fas fa-truck fa-3x"></i><br/>Out For Delivery</a>
  //       </li>
  //       <li class="nav-item">
  //         <a class="nav-link" id="OrderHistory-tab-just" data-toggle="tab" href="#contact-just" role="tab" aria-controls="contact-just"
  //           aria-selected="false"><i class="fas fa-history fa-3x"></i><br/>Order History</a>
  //       </li>
  //     </ul>
  //     <div class="tab-content card pt-5" id="myTabContentJust">
  //       <div class="tab-pane fade show active" id="NewOrder-tab-just" role="tabpanel" aria-labelledby="home-tab-just">
  //      <h1>apple</h1>
  //       </div>
  //       <div class="tab-pane fade" id="OutForDelivey-tab-just" role="tabpanel" aria-labelledby="profile-tab-just">
  //       <h1>Banana</h1>
  //       </div>
  //       <div class="tab-pane fade" id="OrderHistory-tab-just" role="tabpanel" aria-labelledby="contact-tab-just">
  //       <h1>Cat</h1>
  //       </div>
  //     </div>

  //     </div>
  //   )
  //  }
  // }