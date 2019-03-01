import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getRestaurant } from '../../actions/getRestaurants';

export class Restaurant extends Component {
  static propTypes = {
    restaurants: PropTypes.array.isRequired,
    getRestaurantName: PropTypes.func
  };

  componentDidMount(){
    this.props.getRestaurant();
  }

  render() {
    return (
      <div>
        {this.props.restaurants.map((res,i) => (
            <div key={i}>
              <h6>{res.Name}</h6>
              <h6>{res.Address}</h6>
          </div>
        ))}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  restaurants: state.restaurantReducer.restaurants
});

export default connect(mapStateToProps, { getRestaurant })(Restaurant);
//export default  Restaurant;