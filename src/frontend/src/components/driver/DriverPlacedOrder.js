import React, { Component } from 'react'
import { connect } from "react-redux";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { acceptPendingDevOrder } from '../../actions/orders';
import Alert from 'react-bootstrap/Alert';
import Timer from './Timer';

export class DriverPlacedOrder extends Component {
  state = {
    show: false,
    show1: false
  };
  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  onclick(rid, oid, data, driverFName) {
    this.props.acceptPendingDevOrder(rid, oid, data, driverFName);
  }

  render() {
    const handleHide1 = () => this.setState({ show1: false });
    const handleShow1 = () => {
      this.setState({ show1: true });
      setTimeout(handleHide1, 2000);
    }

    return (
      <div>
        <Alert
          show={this.state.show1}
          variant="success"
          style={alertStyle}
        >
          <Alert.Heading>Order Accepted</Alert.Heading>
          <p>Thank you for Accepting Order. We will inform the customer</p>
        </Alert>

        {Object.keys(this.props.pendingDevOrders).map(t => {
          return [this.props.pendingDevOrders[t]].map(order => {
            return Object.keys(order).map(i => {
              return (
                <div className="container" style={{ marginTop: "10px" }}>
                  <div className="menuItems textM d-flex" style={{ padding: "10px" }}>
                    <Timer start={order[i].orderTimeMil}/>
                    <div className="card-body" style={{ textAlign: "center"}}>
                      <h4 className="card-title">From: {order[i].rName}</h4>
                      <p className="card-text">
                        <h5>To: {order[i].user_info.customerAddress1} {order[i].user_info.customerAddress2}</h5>
                      </p>
                      {/* <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p> */}

                      <Button
                        variant="outline-success"
                        onClick={() => {
                          handleShow1(),
                            this.onclick.bind(
                              this,
                              t,
                              i,
                              order[i],
                              this.props.user["Driver"].fname
                            )();
                        }}
                        style={{ padding: "auto 8%" }}
                      >
                        <i className="fas fa-check-circle fa-lg" />
                        <br />
                        Accept
                      </Button>
                      <Button
                        variant="outline-primary"
                        onClick={this.handleShow.bind(this)}
                        style={{ padding: "auto 8%" }}
                      >
                        <i className="fas fa-book-open fa-lg" fa-lg />
                        <br />
                        View
                      </Button>

                      <Modal
                        size="lg"
                        show={this.state.show}
                        onHide={this.handleClose.bind(this)}
                        dialogClassName="modal-90w"
                      >
                        <Modal.Header closeButton>
                          <Modal.Title>
                            <h3 style={{ margin: 0 }}>OrderID: {i}</h3>
                          </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <div className="row">
                            <div className="col">
                              <h4>Pick Up From:</h4>
                              <h3>{order[i].rName}</h3>
                              <h5>{order[i].rAddress}</h5>
                              <h6>{order[i].rCity} {order[i].rZipcode}</h6>
                            </div>
                            <div className="col">
                              <h4>Deliver To:</h4>
                              <h3>{order[i].user_info.customerAddress1} {order[i].user_info.customerAddress2}</h3>
                              <h5>{order[i].user_info.customerCity} {order[i].user_info.customerZipcode}</h5>
                              {/* <h6>{order.phone}</h6> */}
                            </div>
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

                      {/* <Button variant="outline-danger"onClick={() => {this.props.removeOrder(OrderID)}} style={{padding:'auto 8%'}}><i className="far fa-times-circle fa-lg" fa-lg></i><br/>Decline</Button> */}
                    </div>
                  </div>
                </div>
              );
            });
          });
        })}
      </div>
    );
  }
}

const alertStyle = {
  position: "fixed", 
  top: "30px", 
  right: "45%", 
  width: "auto",
  zIndex: "9999", 
  borderRadius:"0px"
}

const mapStateToProps = state => ({
  pendingDevOrders: state.orderReducer.pendingDevOrders,
  user: state.authReducer.user
});

export default connect(mapStateToProps, { acceptPendingDevOrder } )(DriverPlacedOrder);