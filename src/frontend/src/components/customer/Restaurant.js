import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getRestaurant } from '../../actions/getRestaurants';

export class Restaurant extends Component {
  static propTypes = {
    // restaurants: PropTypes.array.isRequired,
    getRestaurantName: PropTypes.func
  };

  componentDidMount(){
    this.props.getRestaurant();
  }

  render() {
    const contentKeys = Object.keys(this.props.restaurants)
    // console.log(JSON.parse(this.props.restaurants))
    return (
      <div className="row">
        {contentKeys.map(t=>
        
          [this.props.restaurants[t]].map(res =>

            <div className="col-md">
              <h6>{res.Name}</h6>
              <h6>{res.Address}</h6>
              <h6>{res.City}</h6>
              <h6>{res.zipcode}</h6>
              <h6>Open:{res.Hours.Open}</h6>
              <h6>Close:{res.Hours.Close}</h6>
            </div>

          )
          
          )}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  restaurants: state.restaurantReducer.restaurants
});

export default connect(mapStateToProps, { getRestaurant })(Restaurant);
//export default  Restaurant;