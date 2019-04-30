import React, { Component } from 'react'
import { connect } from "react-redux"
import PropTypes from "prop-types"
import { addItemToCategory } from "../../actions/menu"
import Modal from 'react-modal';

export class AddItemModal extends Component {
    constructor() {
        super();
    
        this.state = {
           Name: "",
           Description: "",
           Price: "", 
           modalIsOpen: false
        };
    
        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
      }

      static propTypes = {
        addItemsToCategory: PropTypes.func.isRequired
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
        const { Name, Description, Price } = this.state;
        const item = { Name, Description, Price,"category":this.props.category, "rID":this.props.rID };
        this.props.addItemToCategory(item);
        this.setState({
          Name: "",
          Description: "",
          Price: "",
        })
    }
    
      render() {
        const { Name, Description, Price } = this.state;
        return (
          <div>
            <button className="dropdown-item" onClick={this.openModal}>Add Item</button>
            <Modal
              isOpen={this.state.modalIsOpen}
              onAfterOpen={this.afterOpenModal}
              onRequestClose={this.closeModal}
              contentLabel="add Item Modal"
              className="modal-dialog "
              style={{ overlay: { backgroundColor: "rgba(0, 0, 0, 0.50)" } }}
              ariaHideApp={false}
            >
              <div className="modal-content">
                <div className="modal-header">
                <h5 className="text-dark" ref={subtitle => this.subtitle = subtitle}>Add Item to {this.props.category}</h5>
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
                                <label>Description</label>
                                <input
                                className="form-control"
                                type="text"
                                name="Description"
                                onChange={this.onChange}
                                value={Description}
                                required
                                />
                            </div>
                            <div className="form-group">
                                <label>Price</label>
                                <input
                                className="form-control"
                                type="text"
                                name="Price"
                                onChange={this.onChange}
                                value={Price}
                                pattern="(\d+\.\d{2})"
                                title="Price must contain two decimal places e.g. 10.99" 
                                required
                                />
                            </div>
                        </div>
                        <div className="modal-footer">
                          <button onClick={this.closeModal} className="btn btn-secondary">Cancel</button>
                          <button type="submit" className="btn btn-primary" >Add</button>
                        </div>
              </form>
              </div>
            </Modal>
          </div>
        );
      }
}

export default connect(null, { addItemToCategory })(AddItemModal);
