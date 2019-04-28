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
        this.handleShow1 = this.handleShow1.bind(this);
        this.handleClose1 = this.handleClose1.bind(this);
  
    
        this.state = {
          show: false,
          text: "Order Picked Up",
          showButton1:true,
          showButton2:true,
          showButton3:true,
          hideButton1:false,
          hideButton2:false,
          hideButton3:false,
          hideButton4:false
        };
      }
    
      handleClose() {
        this.setState({ show: false });
        
      }
    
      handleShow() {
        this.setState({ show: true });
        
      }

      handleClose1() {
        this.setState({ show1: false });
        
      }
    
      handleShow1() {
        this.setState({ show1: true });
        
      }
      
    changeText = (text) => {
     this.setState({ text });  } 
        
        hideButton =() =>{
        this.setState({showButton1:false})
        this.setState({showButton2:false})
        this.setState({showButton3:false})
        this.setState({hideButton1:true})
        this.setState({hideButton4:true})

       
        }

        deliveryButton=()=>{
        this.setState({hideButton1:false})
        this.setState({hideButton2:true})
        this.setState({hideButton3:true})
        }
        
        orderDeliveredFunction=(OrderID)=>{
            this.props.removeOrder(OrderID);
           

        }
     
      //onClick={() => {this.changeText("Order Picked Up")}}
    render(){
        
        let { OrderID,CID,DeliveryEst,DeliveryInstructions,DriverID,Orders, DeliverrAdd,PrepInsruction,RID,Status,Total } = this.props.indOrder;


        return(

            
            <div class="container">
                <div class="card text-centered" style={{width:'100%',borderRadius:'2%', border: '4px solid darkgreen'}}>
                    <div class="card-body" style={{textAlign:'center'}}>
                        <h4 class="card-title">{CID}</h4>
                        <p class="card-text"><h5>{RID}</h5></p>
                        {/* <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}
                        {this.state.showButton1 ?<Button variant="outline-success"onClick={this.hideButton} style={{width:'33%'}}><i class="fas fa-check-circle fa-lg"></i><br/>Accept</Button>: null}
                        {this.state.hideButton1 ?<Button variant="outline-success"onClick={this.deliveryButton}style={{width:'33%'}}><i class="fas fa-check-circle fa-lg"></i><br/>Order Picked Up</Button>:null}
                        {this.state.hideButton2 ?<Button variant="outline-success"onClick={()=>{this.orderDeliveredFunction(OrderID)}} style={{width:'33%'}}><i class="fas fa-calendar-check fa-lg"></i><br/>Order Delivered</Button>:null}

                        {this.state.showButton3 ?<Button variant="outline-primary" onClick={this.handleShow} style={{width:'33%'}}><i class="fas fa-book-open fa-lg" fa-lg></i><br/>View 1</Button>:null}
                        {this.state.hideButton4 ?<Button variant="outline-primary" onClick={this.handleShow1} style={{width:'33%'}}><i class="fas fa-book-open fa-lg" fa-lg></i><br/>View 2</Button>:null}
                        {this.state.showButton2 ? <Button variant="outline-danger"onClick={() => {this.props.removeOrder(OrderID)}} style={{width:'33%'}}><i class="far fa-times-circle fa-lg" fa-lg></i><br/>Decline</Button>: null}
                        {this.state.hideButton3 ?<Button variant="outline-info" onClick={()=>{window.open('https://www.google.com/maps/dir/?api=1'+'&destination='+encodeURI(DeliverrAdd))+ location.search}} style={{width:'33%'}}><i class="fas fa-map-marked-alt fa-lg"></i><br/>Start Delivery</Button>:null}
                    </div>
                    <div class="card-footer text-muted">2 min ago</div>
                 
                </div>
           

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


                            <Modal size="lg" show={this.state.show1} onHide={this.handleClose1}  dialogClassName="modal-90w" >
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
                                <Button variant="outline-danger" onClick={this.handleClose1} style={{justifyContent:'center'}}>
                                Close
                                </Button>
                                
                            </Modal.Footer>
                            </Modal>
                        
                     
                            </div>    
        )
    }
}
