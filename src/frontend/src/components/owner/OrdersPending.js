import React, { Component } from 'react'
import { connect } from "react-redux"
import PropTypes from "prop-types"
import Modal from 'react-modal';
import { getRestaurantByID } from "../../actions/getRestaurants";
import { acceptPendingOrder, rejectPendingOrder } from '../../actions/orders';
import Alert from 'react-bootstrap/Alert';

export class OrdersPending extends Component {
    constructor() {
        super();
    
        this.state = {
            owner_ID:'',
            res_IDs:null,
            modalIsOpen: false,
            show: false,
            show1: false,
        };
    
        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        
      }

    componentDidMount(){
        this.state.owner_ID = localStorage.getItem('uID');
    }

    onChange = e => this.setState({ [e.target.name]: e.target.value });

    
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

      onSubmit = e => {
        e.preventDefault();
    }
    
    
      render() {

        const handleHide = () => this.setState({ show: false });
        const handleShow = () => this.setState({ show: true });
        const handleHide1 = () => this.setState({ show1: false });
        const handleShow1 = () => this.setState({ show1: true });
        
        let ordersPendingButton;
        if(this.props.pendingOrderCount > 0){
          ordersPendingButton = <a className="nav-link" onClick={this.openModal}><span className="badge badge-pill badge-danger">{this.props.pendingOrderCount}</span>Orders Pending</a>
        }else{
          ordersPendingButton = <a className="nav-link" onClick={this.openModal}>Orders Pending</a>
        }
        
        return (
          <div>
            
            {ordersPendingButton}
            
            <Modal
              isOpen={this.state.modalIsOpen}
              onAfterOpen={this.afterOpenModal}
              onRequestClose={this.closeModal}
              contentLabel="Example Modal"
              className="pre-scrollable"
              style={{overlay:{backgroundColor: "rgba(0, 0, 0, 0.50)"}}}
              ariaHideApp={false}
            >
            <Alert show={this.state.show} variant="success" style={{marginRight:'25%',marginLeft:'25%',marginTop:'20px' }}>
              <Alert.Heading>Order Accepted</Alert.Heading>
              <p>
                Thank you for accepting order. We will inform the customer
              </p>
              <hr />
              <div >
                <button onClick={handleHide} variant="outline-danger">
                  Close me!
                </button>
              </div>
            </Alert>

            <Alert show={this.state.show1} variant="danger" style={{marginRight:'25%',marginLeft:'25%',marginTop:'20px' }}>
              <Alert.Heading>Order Declined</Alert.Heading>
              <p>
                Thank you for Rejecting Order. We will inform the customer
              </p>
              <hr />
              <div >
                <button onClick={handleHide1} variant="outline-danger">
                  Close me!
                </button>
              </div>
            </Alert>
              <div className="modal-dialog modal-dialog-1">

           
              <div className="modal-content">
                <div className="modal-header">
                <h5 className="text-dark" ref={subtitle => this.subtitle = subtitle}>Orders Pending</h5>
                  <button type="button" className="close" onClick={this.closeModal} aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div id="accordion">
                
                  {
                    Object.keys(this.props.pendingOrders).map(t=>
                        [this.props.pendingOrders[t]].map(orders=>{
                            
                            return(
                                <div className="card">
                                    <div className="card-header" id={"heading"+t}>
                                    <h5 className="mb-0">
                                        <button className="btn btn-link collapsed" data-toggle="collapse" data-target={"#collapse"+t} aria-expanded="false" aria-controls={"collapse"+t}>
                                        Restaurant Name: {orders.rName} {" "} Total: {orders.total} {" "}
                                        </button>
                                        <button className="btn btn-success" onClick={()=>{this.props.acceptPendingOrder.bind(this,this.props.pendingOrders[t],t,orders.rID)(),handleShow()}}>Accept</button> | <button className="btn btn-danger" onClick={()=>{this.props.rejectPendingOrder.bind(this,t)(),handleShow1()}}>Reject</button>
                                    </h5>
                                    </div>

                                    <div id={"collapse"+t} className="collapse" aria-labelledby={"heading"+t} data-parent="#accordion">
                                    <div className="card-body">

                                      <table className="table" key={orders.rid}>
                                        <thead>
                                          <tr>
                                            <th scope="col">Name</th>
                                            <th scope="col">Description</th>
                                            <th scope="col">Instructions</th>
                                            <th scope="col">Quantity</th>
                                            <th scope="col">Price</th>
                                          </tr>
                                        </thead>
                                        <tbody>
                                      {

                                        Object.keys(orders.items).map(i =>
                                            [orders.items[i]].map(item=>{

                                                return(
                                                  <tr key={item}>
                                                    <th scope="row">{item.Name}</th>
                                                    <td>{item.Description}</td>
                                                    <td>{item.Instructions}</td>
                                                    <td>{item.Quantity}</td>
                                                    <td>{item.Price}</td>
                                                  </tr>
                                                )

                                            })
                                            
                                        )
                                        }
                                        </tbody>
                                      </table>
                                    
                                    </div>

                                    </div>
                                </div>
                            )
                        
                        }
                        )
                    
                        )
                }
                    
                    
                </div>
              </div>
              </div>
             
            </Modal>

        


          </div>
        );
      }
}

const mapStateToProps = state => ({
    restaurants: state.restaurantReducer.restaurants,
    pendingOrders: state.orderReducer.pendingOrders,
    pendingOrderCount: state.orderReducer.pendingOrderCount
  });

export default connect(mapStateToProps, { getRestaurantByID,rejectPendingOrder,acceptPendingOrder })(OrdersPending);
