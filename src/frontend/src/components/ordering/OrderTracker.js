import React, { Component } from 'react'
import Modal from 'react-modal'
import * as firebase from 'firebase'

export class OrderTracker extends Component {
    constructor() {
        super();
    
        this.state = { 
           modalIsOpen: false,
           progress: "50%",
        };
    
        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
      }
    
    componentDidMount(){
        const uId = localStorage.getItem("uID")+"";
        const rootRef = firebase.database().ref().child('Users').child(uId).child("Customer").child("Orders").child(this.props.orderID).child("status")
        rootRef.on('value', snap => {
            if(snap.val()) {
                switch(snap.val()){
                    case "PENDING":
                        this.state.progress = "14.5%";
                        break;
                    case "ACCEPTED_BY_OWNER":
                        this.state.progress = "31%";
                        break;
                    case "ACCEPTED_BY_DRIVER":
                        this.state.progress = "55.5%";
                        break;
                    case "ON_DELIVERY":
                        this.state.progress = "84%";
                        break;
                    case "DELIVERED":
                        this.state.progress = "100%";
                        break;
                    default:
                        this.state.progress = "0%";
                        break;
                }
            }
        })
    }

    openModal() {
    this.setState({modalIsOpen: true});
    }

    afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00';
    }

    closeModal() {
    this.setState({modalIsOpen: false});
    }

  render() {
    const contentKeys = Object.keys(this.props.orderData.items);

    //Only show driver name if driver has accepted the order
    let driverName;
    if(this.state.progress === "55.5%" ||
       this.state.progress === "84%" ||
       this.state.progress === "100%"){
            driverName = <p>{this.props.orderData.driverFName}</p>
    }else{
            driverName = <p>No Driver Yet</p>
    }

    let deliveryTime;
    if(this.state.progress === "100%"){
        deliveryTime = <p>{this.props.orderData.orderDeliveredTime}</p>
    }else{
        deliveryTime = <p>Not Yet Delivered</p>
    }

    return (
      <div>
        <button className="btn btn-success btn-sm" onClick={this.openModal}>Track</button>
        <Modal
            isOpen={this.state.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            contentLabel="add Item Modal"
            className="pre-scrollable"
            style={{overlay:{backgroundColor: "rgba(0, 0, 0, 0.50)"}}}
            ariaHideApp={false}
        >
           <div className="modal-dialog modal-dialog-1"> 
            <div className="modal-content">
            <div className="modal-header">
            <h5 className="text-dark" ref={subtitle => this.subtitle = subtitle}>Order Tracker</h5>
                <button type="button" className="close" onClick={this.closeModal} aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            
            <div className="modal-body">
            <div className="row mt-3">
                <h4 style={{marginLeft: "5%"}}>Pending</h4>
                <h4 style={{marginLeft: "4%"}}>Accepted</h4>
                <h4 style={{marginLeft: "4%"}}>Driver Assigned</h4>
                <h4 style={{marginLeft: "5%"}}>Out for Delivery</h4>
                <h4 style={{marginLeft: "5%"}}>Delivered</h4>
            </div>

            <div className="progress mb-3 mx-3 progress-border" style={{height: "50px"}}>
                <div className="bar-step label-line" style={{left: "17%"}}></div>
                <div className="bar-step label-line" style={{left: "32%"}}></div>
                <div className="bar-step label-line" style={{left: "55%"}}></div>
                <div className="bar-step label-line" style={{left: "81%"}}></div>
                <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width: this.state.progress}}></div>
            </div>
                
                <div >
                    <h4 className="mt-5">Order Details</h4>
                    <hr/>
                    <div className="row">
                        <div className="col-md-3" style={{fontWeight: "bold"}}>
                            <p>Date: </p>
                            <p>Order Placed: </p>
                            <p>Order Delivered: </p>
                            <p>Driver: </p>
                            <p style={{marginBottom: "50%"}}>Customer: </p>
                            <p style={{marginBottom: "50%"}}>Restaurant: </p>
                        </div>
                        <div className="col-md-3">
                            <p>{this.props.orderData.orderDate}</p>
                            <p>{this.props.orderData.orderTime}</p>
                            {deliveryTime}
                            {driverName}
                            <p>{this.props.orderData.user_info.customerFName} {this.props.orderData.user_info.customerLName}</p>
                            <p>{this.props.orderData.user_info.customerAddress1} {this.props.orderData.user_info.customerAddress2}</p>
                            <p>{this.props.orderData.user_info.customerCity} {this.props.orderData.user_info.customerZipcode}</p>
                            <p>{this.props.orderData.rName}</p>
                            <p>{this.props.orderData.rAddress} </p>
                            <p>{this.props.orderData.rCity} , {this.props.orderData.rZipcode}</p>
                        </div>
                        <div className="col-md-6">
                            <table className="table">
                                <thead className="table-borderless">
                                    <tr>
                                        <th>Name</th>
                                        <th>Qty</th>
                                        <th>Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {contentKeys.map(i =>
                                        <tr>
                                            <td>{this.props.orderData.items[i].Name}</td>
                                            <td>{this.props.orderData.items[i].Quantity}</td>
                                            <td>${this.props.orderData.items[i].Price}</td>
                                        </tr>
                                    )}
                                    <tr>
                                        <td></td>
                                        <th>Total</th>
                                        <td>${this.props.orderData.total}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            </div>
        </Modal>
      </div>
    )
  }
}

export default OrderTracker;
