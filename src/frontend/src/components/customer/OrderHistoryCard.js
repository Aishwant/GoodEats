import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {Link} from 'react-router-dom';










export default class OrderHistoryCard extends Component{

  
    constructor(props, context) {
        super(props, context);
    
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
    
        this.state = {
          show: false,
        };
      }
    
      handleClose() {
        this.setState({ show: false });
      }
    
      handleShow() {
        this.setState({ show: true });
      }

    render(){
        
        let { OrderID,CID,DeliveryEst,DeliveryInstructions,DriverID,Orders,PrepInsruction,RID,Status,Total } = this.props.indOrder;

        return(
            
            <div class="container">
                <div class="card" style={{width:'100%'}}>
                    <div class="card-body" style={{textAlign:'center'}}>
                    <div class='row'>
                    <div class='col'><h5 class="card-title">{OrderID}</h5></div>
                    <div class='col'><h5 class="card-text">{RID}</h5></div>
                    <div class='col'><Button variant="outline-primary" onClick={this.handleShow}>View Details</Button></div>
                    
                    <Link to={`/trackorder/${OrderID}?`}><Button variant="outline-primary" >Track Order</Button></Link>
                    
                    </div>

                         <Modal size="lg" show={this.state.show} onHide={this.handleClose}  dialogClassName="modal-90w" >
                            <Modal.Header closeButton>
                             <Modal.Title ><h3 >OrderID</h3></Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <div style={{textAlign:'center'}}>
                                <div class="row">
                                    <div class="col">
                                        <h4>Pick From</h4>
                                        <h3>Restaurant Test Name</h3>
                                        <h5>Restaurant Street Address</h5>
                                        <h6>City, Zip Code</h6>
                                    </div>

                                    <div class="col">
                                        <h4>Deliver To</h4>
                                        <h3>Customer Test Name</h3>
                                        <h5>Customer Street Address</h5>
                                        <h6>City, Zip Code</h6>
                                    </div>
                                
                                
                                </div>
                                <br/>
                                <div><h4 style={{textAlign:"center"}}>Items Ordered</h4></div>
                                <br/>
                                <div style={{textAlign:"center"}}>
                                <div class="row" style={{textAlign:'center'}}>
                                    <div class="col"><h4>Item Name</h4></div>
                                    <div class="col"><h4>Number</h4></div>
                                </div>
                                <div class="row"style={{textAlign:'center'}}>
                                    <div class="col"><h4>Item Name</h4></div>
                                    <div class="col"><h4>Number</h4></div>
                                </div>
                                <div class="row"style={{textAlign:'center'}}>
                                    <div class="col"><h4>Item Name</h4></div>
                                    <div class="col"><h4>Number</h4></div>
                                </div>
                                <div class="row"style={{textAlign:'center'}}>
                                    <div class="col"><h4>Item Name</h4></div>
                                    <div class="col"><h4>Number</h4></div>
                                </div>
                                <div class="row"style={{textAlign:'center'}}>
                                    <div class="col"><h4>Item Name</h4></div>
                                    <div class="col"><h4>Number</h4></div>
                                </div>
                                </div>
                                <br/>

                                <h4 style={{textAlign:'center'}}>Delivery Instruction</h4>
                                <h6 style={{textAlign:'center'}}> Customer Delivey Instruction goes here. Which includes Delivery instruction for driver.</h6>
                                </div>
                                
                            

                
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="outline-danger" onClick={this.handleClose} style={{justifyContent:'center'}}>
                                Close
                                </Button>
                                
                            </Modal.Footer>
                            </Modal>
                        
                     
                    </div>
                </div>
            </div>
        )
    }
}
