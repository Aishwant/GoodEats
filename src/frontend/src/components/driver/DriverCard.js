import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";










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
                    
                        <button type="button" onClick={() => {this.props.removeOrder(OrderID);this.props.showOrder(OrderID)}}class="btn btn-success btn-sm" style={{width:'50%'}}>Accept</button> 
                        
                     
                        <button type="button" class="btn btn-danger btn-sm" style={{width:'50%'}}>Decline</button>
                    </div>
                </div>
            </div>
        )
    }
}
