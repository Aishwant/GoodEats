import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Button from 'react-bootstrap/Button'











export default class DriverCard extends Component{

    constructor(props) {
        super(props);
    } 

    render(){
        
        let { OrderID,CID,DeliveryEst,DeliveryInstructions,DriverID,Orders,PrepInsruction,RID,Status,Total } = this.props.indOrder;

        return(
            
            <div class="container">
                <div class="card" style={{width:'100%',borderRadius:'2%', border: '4px solid lightgreen'}}>
                    <div class="card-body" style={{textAlign:'center'}}>
                        <h4 class="card-title">{CID}</h4>
                        <p class="card-text"><h5>{RID}</h5></p>
                        {/* <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}
                        <Button variant="outline-success"onClick={() => {this.props.removeOrder(OrderID);this.props.showOrder(OrderID)}}style={{width:'33%'}}><i class="fas fa-check-circle"></i><br/>Accept</Button>
                        <Button variant="outline-primary"style={{width:'33%'}}><i class="fas fa-book-open"></i><br/>View</Button>
                        <Button variant="outline-danger"style={{width:'33%'}}><i class="far fa-times-circle"></i><br/>Decline</Button>
                     
                    </div>
                </div>
            </div>
        )
    }
}
