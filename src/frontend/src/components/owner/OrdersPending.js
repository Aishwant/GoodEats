import React, { Component } from 'react'
import { connect } from "react-redux"
import PropTypes from "prop-types"
import Modal from 'react-modal';
import { getRestaurantByID } from "../../actions/getRestaurants";

export class OrdersPending extends Component {
    constructor() {
        super();
    
        this.state = {
            owner_ID:'',
            res_IDs:null,
            modalIsOpen: false
        };
    
        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
      }

    componentDidMount(){
        this.state.owner_ID = localStorage.getItem('uID');
        this.props.getRestaurantByID();
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
    
    orders = {
        orders1 : {
            rid: "1af1f842-5320-4868-866f-686ff5973180",
            rName: "Boure",
            owner_ID:"7tXRHUVp2uNScdBm1gwHrmDdoB92",
            total: '20.00',
            user_info:{
                address: "123",
                phone: "123",
                email: "test@test.com"
            },
            items:{
                itemId1:{
                    Description: "spicy or mild",
                    Instructions: "",
                    Name:"5pc Tenders",
                    Price:"6.99",
                    Quantity: 1
                },
                itemId2:{
                    Description: "spicy or mild",
                    Instructions: "",
                    Name:"5pc Tenders",
                    Price:"6.99",
                    Quantity: 1
                }
            }
        },
        orders2 : {
          rid: "1af1f842-5320-4868-866f-686ff5973180",
          rName: "Popyes",
          owner_ID:"7tXRHUVp2uNScdBm1gwHrmDdoB92",
          total: '20.00',
          user_info:{
              address: "123",
              phone: "123",
              email: "test@test.com"
          },
          items:{
              itemId1:{
                  Description: "spicy or mild",
                  Instructions: "",
                  Name:"5pc Tenders",
                  Price:"6.99",
                  Quantity: 1
              },
              itemId2:{
                  Description: "spicy or mild",
                  Instructions: "",
                  Name:"5pc Tenders",
                  Price:"6.99",
                  Quantity: 1
              }
          }
      }
    }
      render() {
        this.state.res_IDs = Object.keys(this.props.restaurants);
        console.log(Object.keys(this.orders))
        return (
          <div>
            <a className="nav-link" onClick={this.openModal}>Orders Pending</a>
            <Modal
              isOpen={this.state.modalIsOpen}
              onAfterOpen={this.afterOpenModal}
              onRequestClose={this.closeModal}
              contentLabel="Example Modal"
              className="pre-scrollable"
            >
              <div className="modal-dialog modal-dialog-1">
              <div className="modal-content">
                <div className="modal-header">
                <h5 className="text-dark" ref={subtitle => this.subtitle = subtitle}>Edit Restaurant</h5>
                  <button type="button" className="close" onClick={this.closeModal} aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div id="accordion">
                {
                  
                    Object.keys(this.orders).map(t=>
                        [this.orders[t]].map(orders=>{
                            if (this.state.res_IDs.includes(orders.rid)){
                            return(
                                <div className="card">
                                    <div className="card-header" id={"heading"+t}>
                                    <h5 className="mb-0">
                                        <button className="btn btn-link collapsed" data-toggle="collapse" data-target={"#collapse"+t} aria-expanded="false" aria-controls={"collapse"+t}>
                                        Restaurant Name: {orders.rName} {" "} Total: {orders.total} {" "}
                                        </button>
                                        <button className="btn btn-success">Accept</button> | <button className="btn btn-danger">Reject</button>
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
                        })
                    
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
    restaurants: state.restaurantReducer.restaurants
  });

export default connect(mapStateToProps, { getRestaurantByID })(OrdersPending);
