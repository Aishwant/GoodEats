import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getRestaurant } from "../../actions/getRestaurants";

import { HashRouter, Route, Redirect, Link } from "react-router-dom";


export class Restaurant extends Component {

  static propTypes = {
    restaurants: PropTypes.object.isRequired,
    getRestaurant: PropTypes.func.isRequired,
    resName: PropTypes.string.isRequired
  };

  componentDidMount() {
    this.props.getRestaurant();
  }

  render() {
    const contentKeys = Object.keys(this.props.restaurants);
    //console.log((this.props.restaurants))
    

    return (
        
        <div className="row">
          {contentKeys.map(t =>
            [this.props.restaurants[t]].map(res => (
              <div className="col-md" key={res.Name}>
                <div className="card" style={cardWidth}>
                  <img
                    className="card-img-top"
                    src="https://firebasestorage.googleapis.com/v0/b/csci387.appspot.com/o/img%2Fevanwise.jpg?alt=media&token=6986eebb-7928-42d6-9d4e-7589990f29b3"
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{res.Name}</h5>
                    <p className="card-text">
                      {res.Address} <br />
                      {res.City} {res.zipcode} <br />
                      Open:{res.Hours.Open} <br />
                      Close:{res.Hours.Close} <br />
                    </p>
                    <button
                      type="button"
                      className="btn btn-primary"
                      value={res.Name}
                      name={res.Name}
                      onClick={() => {this.resName=res.Name,console.log(this.resName)}}
                    >
                    <Link to={`/menu/`+res.Name} name={res.Name}>
                      Menu
                    </Link>
                    </button>
                    
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
    );
  }
}

const cardWidth = {
  width: "16rem"
};

const mapStateToProps = state => ({
  restaurants: state.restaurantReducer.restaurants,
  resName: state.restaurantReducer.resName
});

export default connect(
  mapStateToProps,
  { getRestaurant }
)(Restaurant);
//export default  Restaurant;
