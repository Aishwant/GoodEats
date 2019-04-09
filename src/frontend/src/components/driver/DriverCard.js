import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';











export default class DriverCard extends Component{

  
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
                <div class="card" style={{width:'100%',borderRadius:'2%', border: '4px solid darkgreen'}}>
                    <div class="card-body" style={{textAlign:'center'}}>
                        <h4 class="card-title">{CID}</h4>
                        <p class="card-text"><h5>{RID}</h5></p>
                        {/* <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}
                        <Button variant="outline-success"onClick={() => {this.props.removeOrder(OrderID);this.props.showOrder(OrderID)}}style={{width:'33%'}}><i class="fas fa-check-circle fa-lg"></i><br/>Accept</Button>
                        <Button variant="outline-primary" onClick={this.handleShow} style={{width:'33%'}}><i class="fas fa-book-open fa-lg" fa-lg></i><br/>View</Button>

                        <Modal size="lg" show={this.state.show} onHide={this.handleClose}  dialogClassName="modal-90w"
          >
                            <Modal.Header closeButton>
                             <Modal.Title ><h3 style={{margin:0}}>OrderID</h3></Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
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
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="outline-danger" onClick={this.handleClose} style={{justifyContent:'center'}}>
                                Close
                                </Button>
                                
                            </Modal.Footer>
                            </Modal>
                        <Button variant="outline-danger"onClick={() => {this.props.removeOrder(OrderID)}} style={{width:'33%'}}><i class="far fa-times-circle fa-lg" fa-lg></i><br/>Decline</Button>
                     
                    </div>
                </div>
            </div>
        )
    }
}
