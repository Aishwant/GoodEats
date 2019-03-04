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
              <div className="card" style={cardWidth}>
                <img className="card-img-top" src="https://firebasestorage.googleapis.com/v0/b/csci387.appspot.com/o/img%2Fevanwise.jpg?alt=media&token=6986eebb-7928-42d6-9d4e-7589990f29b3" alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">{res.Name}</h5>
                  <p className="card-text">
                    <h6>{res.Address}</h6>
                    <h6>{res.City} {res.zipcode}</h6>
                    <h6>Open:{res.Hours.Open}</h6>
                    <h6>Close:{res.Hours.Close}</h6>
                  </p>
                  <a href="#" className="btn btn-primary">Menu</a>
                </div>
              </div>
            </div>

          )
          
          )}

        
          
          
            
      </div>

    )
  }
}

const cardWidth = {
  width: '14rem'
}

const mapStateToProps = state => ({
  restaurants: state.restaurantReducer.restaurants
});

export default connect(mapStateToProps, { getRestaurant })(Restaurant);
//export default  Restaurant;