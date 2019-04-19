import React, { Component } from 'react'
import { connect } from "react-redux";
import Modal from 'react-modal'
import { placeOrder } from '../../actions/orders'
import { getUser } from '../../actions/getUser'
import { editUser } from '../../actions/addNewUser';

export class PlaceOrder extends Component {
    constructor() {
        super();
    
        this.state = { 
            modalIsOpen: false,
            Address1: "",
            Address2: "",
            city: "",
            fname: "",
            lname:"",
            zipcode: "",
            email:"",
            Phone:"",
            user_id:"",
            cardNumber:"",
            cardExp:"",
            cardCVS:"",
            cardName:""
        };
    
        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
      }

    componentDidMount(){
        this.props.getUser();

        const keys = Object.keys(this.props.user);
        this.state.user_id = keys[0];
        keys.map(t=>
            [this.props.user[t]].map(info=>{
                this.state.fname = info.fname
                this.state.lname = info.lname
                this.state.Address1 = info.Address1
                this.state.Address2 = info.Address2
                this.state.city = info.city
                this.state.Phone = info.Phone
                this.state.zipcode = info.zipcode
                this.state.email = info.email
                this.state.cardNumber = info.cardNumber
                this.state.cardExp = info.cardExp
                this.state.cardCVS = info.cardCVS
                this.state.cardName = info.cardName
            })
            )
            console.log(this.state.cardNumber)
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
        this.props.editUser(this.state);
        this.closeModal();
    }
    
      render() {
        const {Address1, Address2, city, fname, lname, zipcode, Phone, cardNumber} = this.state;

        let orderButton;
        if(this.state.Phone !== "" && 
           this.state.Address1 !== "" && 
           this.state.City !== "" &&
           this.state.cardNumber !== "" ){
            orderButton = <button className="btn btn-sm btn-dark" onClick={this.props.placeOrder.bind(this, this.props.items, this.props.restaurant, this.props.user['Customer'])}>Place Order</button>
        }else{
            orderButton = <button className="btn btn-sm btn-dark" onClick={this.openModal}>Place Order</button>
        }

        return (
          <div>
            {orderButton}
            <Modal
              isOpen={this.state.modalIsOpen}
              onAfterOpen={this.afterOpenModal}
              onRequestClose={this.closeModal}
              contentLabel="add Item Modal"
              className="pre-scrollable"
            >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                <h5 className="text-dark" ref={subtitle => this.subtitle = subtitle}>Fill this our before ordering</h5>
                  <button type="button" className="close" onClick={this.closeModal} aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                  </button>
                </div>
              <form>
              <div className="ml-4 mr-4 mt-4 mb-4">
              <div className="form-group">
                            <label>First Name</label>
                            <input
                            className="form-control"
                            type="text"
                            name="fname"
                            onChange={this.onChange}
                            value={fname}
                            required
                            />
                        </div>
                        <div className="form-group">
                            <label>Last Name</label>
                            <input
                            className="form-control"
                            type="text"
                            name="lname"
                            onChange={this.onChange}
                            value={lname}
                            required
                            />
                        </div>
                        <div className="form-group">
                            <label>Address</label>
                            <input
                            className="form-control"
                            type="text"
                            name="Address1"
                            onChange={this.onChange}
                            value={Address1}
                            required
                            />
                        </div>
                        <div className="form-group">
                            <label>Address Optional</label>
                            <input
                            className="form-control"
                            type="text"
                            name="Address2"
                            onChange={this.onChange}
                            value={Address2}
                            
                            />
                        </div>
                        <div className="form-group">
                            <label>City</label>
                            <input
                            className="form-control"
                            type="text"
                            name="city"
                            onChange={this.onChange}
                            value={city}
                            required
                            />
                        </div>
                        <div className="form-group">
                            <label>Zipcode</label>
                            <input
                            className="form-control"
                            type="text"
                            name="zipcode"
                            onChange={this.onChange}
                            value={zipcode}
                            pattern="^\d{5}(?:[-\s]\d{4})?$"
                            title="Not a valid zipcode"
                            required
                            />
                        </div>
                        <div className="form-group">
                            <label>Phone Number</label>
                            <input 
                            className="form-control"
                            type="text"
                            name="Phone"
                            onChange={this.onChange}
                            value={Phone}
                            pattern="^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$"
                            title="Not a valid PhoneNumber"
                            />
                        </div>
                        <div className="form-group">
                            <label>Credit Card Number</label>
                            <input
                            className="form-control"
                            type="text"
                            name="cardNumber"
                            onChange={this.onChange}
                            value={this.state.cardNumber}
                            pattern="^\d{16}$"
                            title="Not a valid card number"
                            required
                            />
                        </div>
                        </div>
                        <div className="modal-footer">
                          <button onClick={this.closeModal} className="btn btn-secondary">Cancel</button>
                          <button type="submit" className="btn btn-primary" onClick={this.onSubmit}>Save</button>
                        </div>
              </form>
              </div>
              </div>
            </Modal>
          </div>
        );
      }
}

const mapStateToProps = state => ({
    user: state.authReducer.user
});

export default connect(mapStateToProps, { placeOrder, getUser, editUser })(PlaceOrder);