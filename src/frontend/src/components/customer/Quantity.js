import React, { Component } from 'react'

export class Quantity extends Component {

    state = {
        Quantity: 1
    }

    incrementQuantity = () => {
        this.setState({Quantity: this.state.Quantity + 1})
    }
  
    decrementQuantity = () => {
        this.setState({Quantity: this.state.Quantity - 1})
    }

  render() {
    return (
        <div>
        <button className="btn btn-success btn-sm mt-1"  onClick={this.props.addToCartChild.bind(this, this.props.itemID, this.props.itemData, this.state.Quantity)}>Add</button>
        <div className="row">
        <div className="input-group">
          <span className="input-group-btn">
              <button type="button" className="btn btn-default btn-number" onClick={this.decrementQuantity.bind(this)}>
                  -
              </button>
          </span>
          {this.state.Quantity}
          <span className="input-group-btn">
              <button type="button" className="btn btn-default btn-number" onClick={this.incrementQuantity.bind(this)}>
              +
              </button>
          </span>
        </div>
        </div>
        </div>
    )
  }
}

export default Quantity;
