import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types"
import { addCategory, getCategories, deleteCategory, deleteItem, pressButton } from "../../actions/menu";
import { addToCart } from '../../actions/orders';
import queryString from 'query-string';
import { Link } from 'react-router-dom';
import Quantity from './Quantity';


export class Menu_Customer extends Component {
    state = {
        rID: queryString.parse(this.props.location.search).id,
        Quantity: 0,
        restaurantName: ""
    };

    static propTypes = {
        addCategory: PropTypes.func.isRequired
    }

    componentDidMount(){
      this.props.getCategories(this.state.rID);
      const { rName } = this.props.match.params;
      this.setState({restaurantName: rName});
    }

    onChange = e => this.setState({ [e.target.name]: e.target.value });

    onSubmit = e => {
        e.preventDefault();
        const { newCategory } = this.state;
        const data = { newCategory, "rID":this.state.rID }
        this.props.addCategory(data);
    }

    addToCartParent = (itemID, itemData, Quantity) => {
      this.props.addToCart(itemID, itemData, Quantity)
    }

  render() {
    const { newCategory } = this.state
    const contentKeys = Object.keys(this.props.categories)
    return (
      <div className="container text-center">
        <div className="row mt-5">
            <Link to={`/`} className="btn btn-dark btn-sm col-md-1">Back To Restaurants</Link>
            <div className="col-md-2"></div>
            <h2 className="col-md-6">{this.state.restaurantName} Menu</h2>
        </div>  
        <hr/>
        {contentKeys.map(i=>
          
          <div>
            <div className="text-center">
              <div className="row justify-content-center">
                <h4>{i}</h4>
              </div>
              <div className="row">
                {Object.keys(this.props.categories[i]).map(j => 
                  [this.props.categories[i][j]].map(item => 
                    {if(item.Name !== "Item Name"){ return(
                    <div className="col-md-6 menuItems">
                      <div className="textM d-flex">
                        <div className="one-forth">
                          <Quantity itemID={j} itemData={item} addToCartChild={this.addToCartParent}/>
                        </div>
                        <div className="one-half"> 
                          <h3>{item.Name}</h3>
                          <p><span>{item.Description}</span></p>
                        </div>
                        <div className="one-forth">
                          <span className="price">${item.Price}</span>
                        </div>
                      </div>
                    </div>
                    )}}
                  )
                )}
          </div>
          </div>
          </div>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => ({
    categories: state.restaurantReducer.categories,
    isPressed: state.restaurantReducer.isPressed
  });

export default connect(mapStateToProps, { getCategories, addToCart })(Menu_Customer);