import React, { Component } from 'react'
import Modal from 'react-modal';

export class SpecialInstructions extends Component {
    constructor() {
        super();
    
        this.state = {
           Instructions: "", 
           modalIsOpen: false
        };
    
        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
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
        this.props.itemData['Instructions'] = this.state.Instructions;
        this.props.addToCart(this.props.itemID, this.props.itemData, this.props.Quantity);
        this.closeModal();
    }
    
      render() {
        const { Instructions } = this.state;
        return (
          <div>
            <button className="btn btn-success btn-sm btn-block mt-1"  onClick={this.openModal}>Add To Cart</button>
            <Modal
              isOpen={this.state.modalIsOpen}
              onAfterOpen={this.afterOpenModal}
              onRequestClose={this.closeModal}
              contentLabel="add Item Modal"
              className="modal-dialog "
            >
              <div className="modal-content">
                <div className="modal-header">
                <h5 className="text-dark" ref={subtitle => this.subtitle = subtitle}>Add Item to Cart</h5>
                  <button type="button" className="close" onClick={this.closeModal} aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                  </button>
                </div>
              <form>
              <div className="ml-4 mr-4 mt-4 mb-4">
                            <div className="form-group">
                                <label>Instructions</label>
                                <textarea 
                                className="form-control" 
                                name="Instructions"
                                onChange={this.onChange}
                                value={Instructions}
                                rows="3"
                                ></textarea>
                            </div>
                        </div>
                        <div className="modal-footer">
                          <button onClick={this.closeModal} className="btn btn-secondary">Cancel</button>
                          <button type="submit" className="btn btn-primary" onClick={this.onSubmit}>Add</button>
                        </div>
              </form>
              </div>
            </Modal>
          </div>
        );
      }
}

export default (SpecialInstructions);