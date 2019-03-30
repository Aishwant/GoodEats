import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types"
import { addCategory, getCategories, deleteCategory, deleteItem, pressButton } from "../../actions/menu";
import { addToCart } from '../../actions/orders';
import queryString from 'query-string';
import { Link } from 'react-router-dom';


export class Menu_Customer extends Component {
    state = {
        rID: queryString.parse(this.props.location.search).id,
        Quantity: 0
    };

    static propTypes = {
        addCategory: PropTypes.func.isRequired
    }

    componentDidMount(){
      this.props.getCategories(this.state.rID);
    }

    onChange = e => this.setState({ [e.target.name]: e.target.value });

    onSubmit = e => {
        e.preventDefault();
        const { newCategory } = this.state;
        const data = { newCategory, "rID":this.state.rID }
        this.props.addCategory(data);
    }

    onClickButton = (item) => {
        console.log("clicked")
        const data = { 'itemID': item }
        this.props.addToCart(data)
      }

    incrementQuantity = () => {
      this.setState({Quantity: this.state.Quantity + 1})
    }

    decrementQuantity = () => {
      this.setState({Quantity: this.state.Quantity - 1})
    }

  render() {
    const { newCategory } = this.state
    const contentKeys = Object.keys(this.props.categories)
    return (
      <div className="container text-center">
        <div className="row mt-5">
            <Link to={`/`} className="btn btn-dark btn-sm col-md-1">Back To Restaurants</Link>
            <div className="col-md-2"></div>
            <h2 className="col-md-6">Restaurant Name's Menu</h2>
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
                    <div className="col-md-6 menuItems">
                      <div className="textM d-flex">
                        <div className="one-forth">
                        <button className="btn btn-success btn-sm mt-1"  onClick={this.props.addToCart.bind(this, j, item, this.state.Quantity)}>Add To Cart</button>
                        
                        
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
                        <div className="one-half"> 
                          <h3>{item.Name}</h3>
                          <p><span>{item.Description}</span></p>
                        </div>
                        <div className="one-forth">
                          <span className="price">${item.Price}</span>
                        </div>
                      </div>
                    </div>
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