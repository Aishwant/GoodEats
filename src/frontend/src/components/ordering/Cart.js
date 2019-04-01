import React, { Component, Fragment } from 'react'
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getCart, deleteCartItem } from '../../actions/orders';
import EditInstructionsModal from './EditInstructionsModal';

export class Cart extends Component {
    static propTypes = {
        getCart: PropTypes.func.isRequired,
        deleteCartItem: PropTypes.func.isRequired
    }

    componentDidMount(){
        this.props.getCart();
    }

  render() {
    const contentKeys = Object.keys(this.props.items);
    return (
        <div className="container">
            <h2>Cart</h2>
            <table className="table table-striped">
            <thead>
                <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Qty</th>
                <th>Price</th>
                <th />
                </tr>
            </thead>
            <tbody>
            {contentKeys.map(t=>

                [this.props.items[t]].map(res =>
                
                // {
                    // if(res.status){
                    //     ''
                    // }
                    // else{
                        <tr >
                            <td>{res.Name}</td>
                            <td>{res.Description}</td>
                            <td>{res.Quantity}</td>
                            <td>{res.Price}</td>
                            <td className="text-right">
                            <div className="row"><EditInstructionsModal itemID={t} Instructions={res.Instructions}/>
                            <button
                                className="btn btn-danger btn-sm"
                                onClick={this.props.deleteCartItem.bind(this, t, res.Quantity)}
                            >
                                {" "}
                                Delete
                            </button>
                            </div>
                            </td>
                        </tr>
                //     }
                // }
                ))}
            </tbody>
            </table>
        </div>
    )
  }
}

const mapStateToProps = state =>({
    items: state.cartReducer.items
});

export default connect(mapStateToProps, { getCart, deleteCartItem } )(Cart);
