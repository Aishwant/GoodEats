import React,{ Component} from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getRestaurantByID, deleteRestaurant } from '../../actions/getRestaurants';
import FormMenu from './FormMenu';
import {Link} from 'react-router-dom';
import { MDBCol,MDBIcon } from "mdbreact";
import  FormRestaurant  from './FormRestaurant';





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

      
      <div>

        <row>
      

        <MDBCol md="6" style={{marginLeft:'auto',marginRight:'auto',borderRadius:'5'}}>
              <div className="input-group md-form form-sm form-1 pl-0" >
                <div className="input-group-prepend">
                </div>
                <input className="form-control my-0 py-1"
                placeholder="Search anything here..."
                ref={input => this.search = input}
                onChange={this.handleInputChange}
                />
                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                    Add Restaurant
                    </button>
                    <FormRestaurant />
                    
                
              </div>
              
          </MDBCol>

          </row>
          <br/>
          <row>
          <div class="wrapper" style={{display:'grid',gridTemplateColumns:'repeat(auto-fit, minmax(250px, 1fr))',gridGap:'3px',gridRowGap:'15px'}}>
              
              {contentKeys.map(t=>
        
                          [this.props.restaurants[t]].map(res =>
                          { if (this.state.query !== '' && this.state.query === res.Name){
                            
                              return (
                              <div className="col-md-3">
                                <div className="card" style={cardWidth}>
                                <Link to={`/newOrders`} >
                                  <img className="card-img-top" src="https://firebasestorage.googleapis.com/v0/b/csci387.appspot.com/o/img%2Fevanwise.jpg?alt=media&token=6986eebb-7928-42d6-9d4e-7589990f29b3" alt="Card image cap" />
                                  </Link>
                                  <div className="card-body">
                                    <h5 className="card-title" style={{marginLeft:'auto',marginRight:'auto'}}>{res.Name}</h5>
                                    <p className="card-text">
                                      <h7>{res.Address},{res.City},{res.zipcode}</h7>
                                      
                                      <ul><h6>Open:{res.Open}</h6>
                                      <h6>Close:{res.Close}</h6></ul>
                                      
                                    </p>
                                    <ul>
                                    <li><Link to={`/editmenu/${res.Name}?id=${t}`} name={res.Name} className="btn btn-primary">Menu</Link></li>
                                    <li><button
                                      className="btn btn-warning ml-2"
                                    >
                                      Edit
                                    </button></li>
                                    <li><button
                                      onClick={this.props.deleteRestaurant.bind(this, t)}
                                      className="btn btn-danger ml-2"
                                    >
                                      {" "}
                                      Delete
                                    </button></li>

                                    
                                    
                                    </ul>
                                  </div>
                              </div>
                              <br/>
                            </div>)
                            }else{
                              return (
                                <div className="col-md-3">
                                <div className="card" style={cardWidth}>
                                <Link to={`/newOrders`}>

                                  <img className="card-img-top" src="https://firebasestorage.googleapis.com/v0/b/csci387.appspot.com/o/img%2Fevanwise.jpg?alt=media&token=6986eebb-7928-42d6-9d4e-7589990f29b3" alt="Card image cap" />
                                  </Link>
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
          </row>


          
             
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