import React, { Component, Fragment } from 'react'
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getCart, deleteCartItem, placeOrder } from '../../actions/orders';
import EditInstructionsModal from './EditInstructionsModal';
import Total from './Total';
import PlaceOrder from './PlaceOrder';

export class Cart extends Component {
    state = {
        total: 0
    }

    addToTotal(price){
        this.setState({
            total: total+price
        })
    }

    static propTypes = {
        getCart: PropTypes.func.isRequired,
        deleteCartItem: PropTypes.func.isRequired
    }

    componentDidMount(){
        this.props.getCart();
    }

  render() {
    const contentKeys = Object.keys(this.props.items);
    console.log(contentKeys);
    {if(contentKeys.length === 0){
        return(
            <div className="container mt-3" align = "center">
                <br/>
                <h2>Your Cart is Empty</h2>
                <br/>
            </div>
        )
    }}
    return (
        
        <div className="container mt-3">
            {contentKeys.map(i =>

                <div>
                <h2>{this.props.restaurants[i].Name} Cart</h2>
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
                
                    {Object.keys(this.props.items[i]).map(j => 
                        [this.props.items[i][j]].map(item =>
                        {if(j !== "total"){ return(
                        <tr >
                            <td width="15%">{item.Name}</td>
                            <td width="45%">{item.Description}</td>
                            <td width="10%">{item.Quantity}</td>
                            <td width="10%">${item.Price}</td>
                            <td width="20%">
                            <div className="row"><EditInstructionsModal rID={i} itemID={j} Instructions={item.Instructions}/>
                            <button
                                className="btn btn-danger btn-sm"
                                onClick={this.props.deleteCartItem.bind(this, i, j, item.Quantity, item.Price)}
                            >
                                {" "}
                                Delete
                            </button>
                            </div>
                            </td>
                        </tr>
                        )}
                        else{return(
                            <tr className="table-info">
                                <td></td>
                                <td></td>
                                <td>Total</td>
                                <td><Total total={this.props.items[i][j]}/></td>
                                <td><PlaceOrder items={this.props.items[i]} restaurant={this.props.restaurants[i]}/></td>
                            </tr>
                        )}
                    }
                    ))}
                </tbody>
                </table>
                </div>
            )} 
        </div>
        
    )
  }
}

const mapStateToProps = state =>({
    restaurants: state.restaurantReducer.restaurants,
    items: state.cartReducer.items
});

export default connect(mapStateToProps, { getCart, deleteCartItem, placeOrder } )(Cart);
