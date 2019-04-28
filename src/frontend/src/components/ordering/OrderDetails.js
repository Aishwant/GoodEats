import React, { Component } from 'react'
import Modal from 'react-modal'

export class OrderDetails extends Component {
    constructor() {
        super();
    
        this.state = { 
           modalIsOpen: false,
        };
    
        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
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

    let driverName = this.props.orderData.driverFName !== undefined ? <p>{this.props.orderData.driverFName}</p> : <p>No Driver Yet</p>;
  
    return (
      <div>
        <button className="btn btn-info btn-sm" onClick={this.openModal}>Details</button>
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
            <h5 className="text-dark" ref={subtitle => this.subtitle = subtitle}>Order Details</h5>
                <button type="button" className="close" onClick={this.closeModal} aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            
            <div className="modal-body">
                    <div className="row">
                        <div className="col-md-3" style={{fontWeight: "bold"}}>
                            <p>Date: </p>
                            <p>Order Placed: </p>
                            <p>Driver: </p>
                            <p style={{marginBottom: "50%"}}>Customer: </p>
                            <p style={{marginBottom: "50%"}}>Restaurant: </p>
                        </div>
                        <div className="col-md-3">
                            <p>{this.props.orderData.orderDate}</p>
                            <p>{this.props.orderData.orderTime}</p>
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
        </Modal>
      </div>
    )
  }
}

export default OrderDetails;
