import React, { Component } from 'react'
import { connect } from "react-redux"
import PropTypes from "prop-types"
import { editRestaurant } from "../../actions/getRestaurants"
import Modal from 'react-modal';

export class EditModal extends Component {
    constructor() {
        super();
    
        this.state = {
            Address: "",
            City: "",
            Open: "",
            Close: "",
            Name: "",
            img: "",
            zipcode: "",
            rID: "",
            CuisineType: "",
            imgURL: "",
            modalIsOpen: false
        };
    
        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
      }

      static propTypes = {
        editRestaurant: PropTypes.func.isRequired
        }

    componentDidMount(){
        this.state.Address = this.props.address;
        this.state.City = this.props.city;
        this.state.Open = this.props.open;
        this.state.Close = this.props.close;
        this.state.Name = this.props.name;
        this.state.img = "";
        this.state.zipcode = this.props.zipcode;
        this.state.rID = this.props.rID;
        this.state.CuisineType = this.props.cuisineType;
        this.state.imgURL = this.props.imgURL
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
        const { Address, City, Open, Close, Name, img, zipcode, rID, CuisineType, imgURL } = this.state;
        const restaurant = { Address, City, Open, Close, Name, img, zipcode, rID, CuisineType, imgURL };
        this.props.editRestaurant(restaurant);
    }
    
      render() {
        const { Address, City, Open, Close, Name, img, zipcode, CuisineType, imgURL } = this.state;
        return (
          <div>
            <button className="btn btn-warning ml-2" onClick={this.openModal}>Edit</button>
            <Modal
              isOpen={this.state.modalIsOpen}
              onAfterOpen={this.afterOpenModal}
              onRequestClose={this.closeModal}
              contentLabel="Example Modal"
              className="pre-scrollable"
            >
              <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                <h5 className="text-dark" ref={subtitle => this.subtitle = subtitle}>Edit Restaurant</h5>
                  <button type="button" className="close" onClick={this.closeModal} aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                  </button>
                </div>
              <form onSubmit={this.onSubmit}>
              <div className="ml-4 mr-4 mt-4 mb-4">
                            
                            <div className="form-group">
                                <label>Name</label>
                                <input
                                className="form-control"
                                type="text"
                                name="Name"
                                onChange={this.onChange}
                                value={Name}
                                required
                                />
                            </div>
                            <div className="form-group">
                                <label>Cuisine Type</label>
                                <input
                                className="form-control"
                                type="text"
                                name="CuisineType"
                                onChange={this.onChange}
                                value={CuisineType}
                                required
                                />
                            </div>
                            <div className="form-group">
                                <label>Address</label>
                                <input
                                className="form-control"
                                type="text"
                                name="Address"
                                onChange={this.onChange}
                                value={Address}
                                required
                                />
                            </div>
                            <div className="form-group">
                                <label>City</label>
                                <input
                                className="form-control"
                                type="text"
                                name="City"
                                onChange={this.onChange}
                                value={City}
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
                                required
                                />
                            </div>
                            <div className="form-group">
                                <label>Open</label>
                                <input 
                                className="form-control"
                                type="time"
                                name="Open"
                                onChange={this.onChange}
                                value={Open}
                                required
                                />
                            </div>
                            <div className="form-group">
                                <label>Close</label>
                                <input 
                                className="form-control"
                                type="time"
                                name="Close"
                                onChange={this.onChange}
                                value={Close}
                                required
                                />
                            </div>
                            <div className="form-group">
                                  <label>Restaurant Image</label>
                                  <input 
                                  className="form-control"
                                  type="text"
                                  name="imgURL"
                                  onChange={this.onChange}
                                  value={imgURL}
                                  required
                                  />
                            </div>
                        </div>
                        <div className="modal-footer">
                          <button onClick={this.closeModal} className="btn btn-secondary">Cancel</button>
                          <button type="submit" className="btn btn-primary" >Save</button>
                        </div>
              </form>
              </div>
              </div>
            </Modal>
          </div>
        );
      }
}

export default connect(null, { editRestaurant })(EditModal);
