import React, { Component } from 'react'
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export class DriverDeliveryHistory extends Component {
  state = {
    show: false
  };

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    return (
      <div>
        {Object.keys(this.props.deliveredOrders).map(t => {
          return [this.props.deliveredOrders[t]].map(order => {
            return (
              <div class="container" style={{ marginTop: "10px" }}>
                <div class="card" style={{ width: "100%" }}>
                  <div class="card-body" style={{ textAlign: "center" }}>
                    <div class="row">
                      <div class="col">
                        <h5 class="card-title">{t}</h5>
                      </div>
                      <div class="col">
                        <h5 class="card-text">{order.rName}</h5>
                      </div>
                      <div class="col">
                        <Button
                          variant="outline-primary"
                          onClick={this.handleShow.bind(this)}
                        >
                          View Details
                        </Button>
                      </div>
                    </div>

                    <Modal
                      size="lg"
                      show={this.state.show}
                      onHide={this.handleClose.bind(this)}
                      dialogClassName="modal-90w"
                    >
                      <Modal.Header closeButton>
                        <Modal.Title>
                          <h3 style={{ margin: 0 }}>OrderID</h3>
                        </Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <br />
                        <div style={{ textAlign: "center" }}>
                          <h4>Delivery Date: Date</h4>
                        </div>
                        <br />
                        <div class="row">
                          <div class="col" style={{ textAlign: "center" }}>
                            <h4>Picked From</h4>
                            <h3>{order.rName}</h3>
                            <h5>Restaurant Street Address</h5>
                            <h6>City, Zip Code</h6>
                          </div>

                          <div class="col" style={{ textAlign: "center" }}>
                            <h4>Delivered To</h4>
                            <h5>{order.user_info.address}</h5>
                            <h6>City, Zip Code</h6>
                          </div>
                        </div>
                        <br />
                        <div style={{ textAlign: "center" }}>
                          <h4>Status:Delivered</h4>
                        </div>
                      </Modal.Body>
                      <Modal.Footer>
                        <Button
                          variant="outline-danger"
                          onClick={this.handleClose.bind(this)}
                          style={{ justifyContent: "center" }}
                        >
                          Close
                        </Button>
                      </Modal.Footer>
                    </Modal>
                  </div>
                </div>
              </div>
            );
          });
        })}
      </div>
    );
  }
}


const mapStateToProps = state => ({
  deliveredOrders :state.orderReducer.deliveredOrders
})

export default connect(mapStateToProps, null )(DriverDeliveryHistory)
