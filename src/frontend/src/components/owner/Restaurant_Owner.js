import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getRestaurantByID, deleteRestaurant } from '../../actions/getRestaurants';
import FormMenu from './FormMenu';
import {Link} from 'react-router-dom';




export class Restaurant extends Component {

  componentDidMount(){
    this.props.getRestaurantByID();
  }

  state = {
    query: '',
    showForm:false
  }
  
  handleClick= event =>{
    event.preventDefault()
    this.setState({showForm:true})
  }
  handleInputChange = () => {
    this.setState({
      query: this.search.value
      
    })
  }

  render() {
    const contentKeys = Object.keys(this.props.restaurants)
    //console.log((this.props.restaurants))
    return (
      <div className="row">
        <div className="col-md-12">
          <input
          placeholder="Search anything here..."
          ref={input => this.search = input}
          onChange={this.handleInputChange}
        />
       </div>

        {contentKeys.map(t=>
        
          [this.props.restaurants[t]].map(res =>
           { if (this.state.query !== '' && this.state.query === res.Name){
             
              return (
              <div className="col-md-3">
                <div className="card" style={cardWidth}>
                  <img className="card-img-top" src="https://firebasestorage.googleapis.com/v0/b/csci387.appspot.com/o/img%2Fevanwise.jpg?alt=media&token=6986eebb-7928-42d6-9d4e-7589990f29b3" alt="Card image cap" />
                  <div className="card-body">
                    <h5 className="card-title">{res.Name}</h5>
                    <p className="card-text">
                      <h6>{res.Address}</h6>
                      <h6>{res.City} {res.zipcode}</h6> 
                      <h6>Open:{res.Open}</h6>
                      <h6>Close:{res.Close}</h6>
                    </p>
                    
                    
                    <Link to={`/editmenu/${res.Name}?id=${t}`} name={res.Name} className="btn btn-primary">Menu</Link>

                    <button
                      className="btn btn-warning ml-2"
                    >
                      Edit
                    </button>
                    <button
                      onClick={this.props.deleteRestaurant.bind(this, t)}
                      className="btn btn-danger ml-2"
                    >
                      {" "}
                      Delete
                    </button>
                  </div>
              </div>
            </div>)
            }else{
              return (
                <div className="col-md-3">
                <div className="card" style={cardWidth}>
                  <img className="card-img-top" src="https://firebasestorage.googleapis.com/v0/b/csci387.appspot.com/o/img%2Fevanwise.jpg?alt=media&token=6986eebb-7928-42d6-9d4e-7589990f29b3" alt="Card image cap" />
                  <div className="card-body">
                    <h5 className="card-title">{res.Name}</h5>
                    <p className="card-text">
                      <h6>{res.Address}</h6>
                      <h6>{res.City} {res.zipcode}</h6> 
                      <h6>Open:{res.Open}</h6>
                      <h6>Close:{res.Close}</h6>
                    </p>
                    <Link to={`/editmenu/${res.Name}?id=${t}`} name={res.Name} className="btn btn-primary">Menu</Link>
                    <button
                      className="btn btn-warning ml-2"
                    >
                      Edit
                    </button>
                    <button
                      onClick={this.props.deleteRestaurant.bind(this, t)}
                      className="btn btn-danger ml-2"
                    >
                      {" "}
                      Delete
                    </button>
                  </div>
              </div>
            </div>
              )
            }
          }
            
          )
        )}
      </div>
    )
  }
}

const cardWidth = {
  width: '250px'
}


const mapStateToProps = state => ({
  restaurants: state.restaurantReducer.restaurants
});

export default connect(mapStateToProps, { getRestaurantByID, deleteRestaurant })(Restaurant);