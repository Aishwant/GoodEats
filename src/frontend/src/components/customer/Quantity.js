import React, { Component } from 'react'
import SpecialInstructions from './SpecialInstructions'

export class Quantity extends Component {

    state = {
        Quantity: 1
    }

    incrementQuantity = () => {
        this.setState({Quantity: this.state.Quantity + 1})
    }
  
    decrementQuantity = () => {
        if(this.state.Quantity == 1){
            this.setState({Quantity: 1})
        }else{
            this.setState({Quantity: this.state.Quantity - 1})
        }
    }

  render() {
    return (
        <div>
        <SpecialInstructions itemID={this.props.itemID} itemData={this.props.itemData} passQuantity={this.state.Quantity} addToCart={this.props.addToCartChild}/>
        <div className="row">
        <div className="input-group mt-1">
          <span className="input-group-btn">
              <button type="button" className="btn btn-default btn-number ml-2" onClick={this.decrementQuantity.bind(this)}>
                  -
              </button>
          </span>
          <div className="mt-2">
          {this.state.Quantity}
          </div>
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
