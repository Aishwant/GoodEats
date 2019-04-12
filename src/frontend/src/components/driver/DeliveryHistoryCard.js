import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';











export default class DeliveryHistoryCard extends Component{

  
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
            
            <div class="container" style={{marginTop: "10px"}}>
                <div class="card" style={{width:'100%'}}>
                    <div class="card-body" style={{textAlign:'center'}}>
                    <div class='row'>
                    <div class='col'><h5 class="card-title">{OrderID}</h5></div>
                    <div class='col'><h5 class="card-text">{RID}</h5></div>
                    <div class='col'><Button variant="outline-primary" onClick={this.handleShow}>View Details</Button></div>
                    </div>

                        <Modal size="lg" show={this.state.show} onHide={this.handleClose}  dialogClassName="modal-90w"
          >
                            <Modal.Header closeButton>
                             <Modal.Title ><h3 style={{margin:0}}>OrderID</h3></Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <br/>
                                <div style={{textAlign:'center'}}><h4>Delivery Date: Date</h4></div>
                                <br/>
                                <div class="row">
                                <div class="col" style={{textAlign:'center'}}>
                                <h4>Picked From</h4>
                                <h3>Restaurant Test Name</h3>
                                <h5>Restaurant Street Address</h5>
                                <h6>City, Zip Code</h6>
                                </div>

                                <div class="col" style={{textAlign:'center'}}>
                                <h4>Delivered To</h4>
                                <h3>Customer Test Name</h3>
                                <h5>Customer Street Address</h5>
                                <h6>City, Zip Code</h6>
                                </div>

                              
                                </div>
                                <br/>
                                <div style={{textAlign:'center'}} ><h4>Status:Delivered</h4></div>
                                
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
