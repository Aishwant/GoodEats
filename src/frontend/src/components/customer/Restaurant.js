import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getRestaurant } from '../../actions/getRestaurants';
import { Link } from "react-router-dom";


export class Restaurant extends Component {

  // static propTypes = {
  //   // restaurants: PropTypes.array.isRequired,
  //   getRestaurantName: PropTypes.func,
  //   getRestaurant: PropTypes.func
  // };

  componentDidMount(){
    this.props.getRestaurant();
  }

  state = {
    query: '',
    showForm:false,
    search: false,
    nameS: true,
    zipcodeS: false,
    cityS:false,
    closeS:false,
    cuisineTypeS:false,
    tagS:false,
    filter:'nameS'
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
      this.setState({nameS:true,zipcodeS:false,cityS:false,closeS:false,cuisineTypeS:false,tagS:false});
    }else if(this.state.filter=="zipcodeS"){
      this.setState({nameS:false,zipcodeS:true,cityS:false,closeS:false,cuisineTypeS:false,tagS:false});
    }else if(this.state.filter=="cityS"){
      this.setState({nameS:false,zipcodeS:false,cityS:true,closeS:false,cuisineTypeS:false,tagS:false})
    }else if(this.state.filter=="closeS"){
      this.setState({nameS:false,zipcodeS:false,cityS:false,closeS:true,cuisineTypeS:false,tagS:false})
    }else if(this.state.filter=="cusineTypeS"){
      this.setState({nameS:false,zipcodeS:false,cityS:false,closeS:false,cuisineTypeS:true,tagS:false})
    }else if(this.state.filter=="tagS"){
      this.setState({nameS:false,zipcodeS:false,cityS:false,closeS:false,cuisineTypeS:false,tagS:true})
    }
  }

  onChange=e=> {
    this.setState({filter:e.target.value});
  }

  render() {
    const contentKeys = Object.keys(this.props.restaurants)
    const { filter } = this.state;
    //console.log((this.props.restaurants))
    return (
      <Fragment>
        <div className="col-md-6" style={{borderBottom:"solid 3px #ddd", paddingBottom:"15px", marginBottom:"25px"}}>
          <div className="row mt-2" style={{marginBottom:"20px"}}>
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
              <option value="zipcodeS">Zipcode</option>
              <option value="cityS">City</option>
              <option value="closeS">Close Time</option>
              <option value="cuisineTypeS">Cuisine Type</option>
              <option value="tagS">Menu Items</option>
            </select>
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
                  (this.state.zipcodeS && res.zipcode.toUpperCase().includes(this.state.query.toUpperCase())) ||
                  (this.state.cityS && res.City.toUpperCase().includes(this.state.query.toUpperCase()))||
                  (this.state.closeS && res.Close.includes(this.state.query)) ||
                  (this.state.cuisineTypeS && res.CuisineType.toUpperCase().includes(this.state.query.toUpperCase())) ||
                  (this.state.tagS && res.tags.toUpperCase().includes(this.state.query.toUpperCase()))
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
                      <h6>Open: {res.Open}</h6>
                      <h6>Close: {res.Close}</h6>
                      <Link to={`/menu/${res.Name}?id=${t}`} name={res.Name} className="btn btn-primary">Menu</Link>
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
                  <div className="col-md-3" key={res.Name} style={{marginBottom:'15px'}}>
                    <div className="card" style={cardWidth}>
                    <img className="card-img-top" src={res.imgURL} alt={res.Name} />
                    <div className="card-body">
                      <h5 className="card-title">{res.Name}</h5>
                      <div className="card-text">
                        <h6>{res.Address}</h6>
                        <h6>{res.City} {res.zipcode}</h6>
                        <h6>Type: {res.CuisineType}</h6> 
                        <h6>Open: {res.Open}</h6>
                        <h6>Close: {res.Close}</h6>
                        <Link to={`/menu/${res.Name}?id=${t}`} name={res.Name} className="btn btn-primary">Menu</Link>
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
  width: "16rem"
};

const mapStateToProps = state => ({
  restaurants: state.restaurantReducer.restaurants,
  resName: state.restaurantReducer.resName
});

export default connect(mapStateToProps, { getRestaurant })(Restaurant);
