import React, { Component, Fragment } from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getRestaurantByID, deleteRestaurant } from '../../actions/getRestaurants';
import {Link} from 'react-router-dom';
import EditModal from './EditModal';
import FormRestaurant from './FormRestaurant'



export class Restaurant extends Component {

  state = {
    query: '',
    showForm:false,
    search: false,
    nameS: true,
    zipcodeS: false,
    cityS:false,
    closeS:false,
    cuisineTypeS:false,
    filter:'nameS'
  }

  componentDidMount(){
    this.props.getRestaurantByID();
  }
  convertTime(data){
    console.log(data);
    let data1 = data.split(":");
    data = data1[0] + "." + data1[1];
    data = parseFloat(data);
    console.log(data);
    if((data <= 24) && (data >= 0)) {
       data % 12;
       data = data + "";
       let data2 = data.split(".");
       console.log(data);
       data = data2[0] + ":" + data2[1];
       console.log(data);
       return data;
    }
    
  }
  handleClick= event =>{
    event.preventDefault()
    this.setState({showForm:true})
  }
  handleInputChange = () => {
    this.setState({
      query: this.search.value,
    })
    if(this.state.query!==''){
      this.setState({
        search: true
      })
    }
    if(this.state.filter=="nameS"){
      this.setState({nameS:true,zipcodeS:false,cityS:false,closeS:false,cuisineTypeS:false});
    }else if(this.state.filter=="zipcodeS"){
      this.setState({nameS:false,zipcodeS:true,cityS:false,closeS:false,cuisineTypeS:false});
    }else if(this.state.filter=="cityS"){
      this.setState({nameS:false,zipcodeS:false,cityS:true,closeS:false,cuisineTypeS:false})
    }else if(this.state.filter=="closeS"){
      this.setState({nameS:false,zipcodeS:false,cityS:false,closeS:true,cuisineTypeS:false})
    }else if(this.state.filter=="cusineTypeS"){
      this.setState({nameS:false,zipcodeS:false,cityS:false,closeS:false,cuisineTypeS:true})
    }
  }

  onChange=e=> {
    this.setState({filter:e.target.value});
  }

  render() {
    const contentKeys = Object.keys(this.props.restaurants)
    const { filter } = this.state;

    return (
      <Fragment>
        <div className="col-md-12" style={{borderBottom:"solid 3px #ddd", paddingBottom:'25px', margin:"25px auto"}}>
          <div className="row">

            <div className="col-md-6">
              <div className="input-group">
                <input
                type="text"
                placeholder="Search with"
                ref={input => this.search = input}
                onChange={this.handleInputChange}
                className="form-control"
                aria-label="Text input with dropdown button"
                />
                <select className="input-group-append" id="inlineFormCustomSelect" value={filter} onChange={this.onChange}>
                  <option value="nameS">Name</option>
                  <option value="zipcodeS">Zip Code</option>
                  <option value="cityS">City</option>
                  <option value="closeS">Hours</option>
                  <option value="cuisineTypeS">Cuisine Type</option>
                </select>
              </div>
            </div>
            <div className="col-md-6 text-right">
              <FormRestaurant />
            </div>

          </div>
        </div>
        <div className="col-md-12">
          <div className="row">
            {contentKeys.map(t=>
            
              [this.props.restaurants[t]].map(res =>
              { if 
                  (this.state.query !== '' &&
                    (
                      (this.state.nameS && res.Name.toUpperCase().includes(this.state.query.toUpperCase()))||
                      (this.state.zipcodeS && res.zipcode.includes(this.state.query)) ||
                      (this.state.cityS && res.City.includes(this.state.query))||
                      (this.state.closeS && res.Close.includes(this.state.query)) ||
                      (this.state.cuisineTypeS && res.CuisineType.toUpperCase().includes(this.state.query.toUpperCase()))
                    )
                  )
                  {
                
                  return (
                  <div className="col-md-3" key={res.Name} style={{marginBottom:'15px'}}>
                    <div className="card" style={cardWidth}>
                      <img className="card-img-top" src={res.imgURL} alt={res.Name} />
                      <div className="card-body">
                        <h5 className="card-title">{res.Name}</h5>
                        <div className="card-text">
                          <h6>{res.Address}</h6>
                          <h6>{res.City} {res.zipcode}</h6> 
                          <h6>Type: {res.CuisineType}</h6>
                          <h6>Hours: {this.convertTime.bind(this,res.Open)}{this.convertTime.bind(this,res.Close)}</h6>
                          <div className="row" style={{marginLeft:"2px"}}>
                            <Link to={`/editmenu/${res.Name}?id=${t}`} name={res.Name} className="btn btn-primary">Menu</Link>

                            <EditModal mID={this.modalID} name={res.Name} address={res.Address} city={res.City} zipcode={res.zipcode} open={res.Open} close={res.Close} rID={t} cuisineType={res.CuisineType} imgURL={res.imgURL}/>
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
                  </div>
                  </div>
                )
            }else{
              if(this.state.query){
                return('')
              }else{
                return (
                  <div className="col-md-3" key={res.Name} style={{marginTop: '15px'}}>
                    <div className="card" style={cardWidth}>
                    <img className="card-img-top" src={res.imgURL} alt={res.Name} />
                    <div className="card-body">
                      <h5 className="card-title">{res.Name}</h5>
                      <div className="card-text">
                        <h6>{res.Address}</h6>
                        <h6>{res.City} {res.zipcode}</h6>
                        <h6>Type: {res.CuisineType}</h6> 
                        <h6>Hours: {this.convertTime(res.Open)} - {this.convertTime(res.Close)}</h6>
                      </div>
                      <div className="row" style={{marginLeft:"2px"}}>
                        <Link to={`/editmenu/${res.Name}?id=${t}`} name={res.Name} className="btn btn-primary">Menu</Link>
                        <EditModal mID={this.modalID} name={res.Name} address={res.Address} city={res.City} zipcode={res.zipcode} open={res.Open} close={res.Close} rID={t} cuisineType={res.CuisineType} imgURL={res.imgURL}/>
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
                    </div>
                )
              }
            }
          }
          )
          )}
          </div>
        </div>
      </Fragment>
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