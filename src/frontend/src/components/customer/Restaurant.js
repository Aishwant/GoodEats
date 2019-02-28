import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getRestaurantName } from '../../actions/authentication';

export class Restaurant extends Component {
  static propTypes = {
    restaurants: PropTypes.string,
    getRestaurantName: PropTypes.func
  };

  componentDidMount(){
    this.props.getRestaurantName();
  }

  render() {
    return (
      <div>
        <p>{this.props.restaurants}</p>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  restaurants: state.authReducer.restaurants
});

export default connect(mapStateToProps, { getRestaurantName })(Restaurant);
//export default  Restaurant;