import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import queryString from 'query-string';
import { getMenu } from '../../actions/getRestaurants';



export class CustomerMenu extends Component {
  
  static propTypes = {
    // menu: PropTypes.object,
    getMenu: PropTypes.func
  };

  state = {
    Appetizer: true,
    Main: false,
    Drinks: false,
  };

  onClickAppetizer() {
    this.setState({ Appetizer: !this.state.Appetizer });
    this.setState({ Drinks: false, Main: false });
  }

  onClickMain() {
    this.setState({ Main: !this.state.Main });
    this.setState({ Drinks: false, Appetizer: false });
  }

  onClickDrinks() {
    this.setState({ Drinks: !this.state.Drinks });
    this.setState({ Appetizer: false, Main: false });
  }

  componentDidMount(){
    const rID = queryString.parse(this.props.location.search).id;
    this.props.getMenu(rID);
  }

  render() {
    
    let btnStyleA = this.state.Appetizer
      ? { color: "#fff", backgroundColor: "#333", fontSize:"20px!important" }
      : { backgroundColor: "#eee", color:'#a5a5ab', fontSize:"20px!important" };
    let btnStyleM = this.state.Main
      ? { color: "#fff", backgroundColor: "#333", fontSize:"20px!important" }
      : { backgroundColor: "#eee", color:'#a5a5ab', fontSize:"20px!important" };
    let btnStyleD = this.state.Drinks
      ? { color: "#fff", backgroundColor: "#333", fontSize:"20px!important" }
      : { backgroundColor: "#eee", color:'#a5a5ab', fontSize:"20px!important" };
      
    const json = {
                  item1:
                  {
                    FoodN: "Fruit Vanilla Ice Cream",
                    Description:"Meat, Potatoes, Rice, Tomatoes",
                    Price: "$29"
                  },
                  item2:
                  {
                    FoodN: "Grilled Beef with potatoes",
                    Description:"Meat, Potatoes, Rice, Tomatoes",
                    Price: "$29"
                  },item3:{
                    FoodN: "KFC Chicken",
                    Description:"Fried Chicken",
                    Price: "$19"
                  },
                  item4:
                  {
                    FoodN: "Asian Hoisin Pork",
                    Description:"Meat, Potatoes, Rice, Tomatoes",
                    Price: "$29"
                  },
                  item5:
                  {
                    FoodN: "Fruit Vanilla Ice Cream",
                    Description:"Meat, Potatoes, Rice, Tomatoes",
                    Price: "$29"
                  },
                  item6:
                  {
                    FoodN: "Grilled Beef with potatoes",
                    Description:"Meat, Potatoes, Rice, Tomatoes",
                    Price: "$29"
                  },item7:{
                    FoodN: "KFC Chicken",
                    Description:"Fried Chicken",
                    Price: "$19"
                  }
                };
                
    const contentMenuKeys = Object.keys(this.props.menu);
    
    const contentKeys = Object.keys(json);
    const appetizers = contentKeys.map(t=>{
                        return(
                          [json[t]].map(menu=>{
                            return(
                              <div className="col-md-6 menuItems">
                                <div className="textM d-flex">
                                  <div className="one-half">
                                    <h3>{menu.FoodN}</h3>
                                    <p><span>{menu.Description}</span></p>
                                  </div>
                                  <div className="one-forth">
                                    <span className="price">{menu.Price}</span>
                                  </div>
                                </div>
                              </div>
                            )
                          })
                        )
                        
                      })
    
    return (
      <div className="container text-center">
        <h3 style={{marginTop:'50px'}}>We Serve</h3>
        <div className="text-center" style={{marginBottom: '30px', marginTop:'40px'}}>
          <button
            type="button"
            className="btn menuBtn"
            style={btnStyleA}
            onClick={this.onClickAppetizer.bind(this)}
            data-toggle="modal"
            data-target="#ownerModalCenter"
          >
            <i class="fas fa-cookie-bite">{" "}Appetizer</i>
          </button>
          <button
            type="button"
            className="btn menuBtn"
            style={btnStyleM}
            onClick={this.onClickMain.bind(this)}
          >
            <i class="fas fa-utensils">{" "}Main</i>
          </button>
          <button
            type="button"
            className="btn menuBtn"
            style={btnStyleD}
            onClick={this.onClickDrinks.bind(this)}
          >
            <i className="fas fa-glass-cheers">{" "} Drink</i>
          </button>
        </div>
        <br />

          <div className="row">
          {/* {this.state.Appetizer ? appetizers:''} */}
          </div>
          {
            contentMenuKeys.map(t=>{
              // if (t === this.state.Appetizer)
              
              return(
                <div className="text-center">
                  <h4>{t}</h4>
                  <div className="row">
                    {Object.keys(this.props.menu[t]).map(menu=>{
                      return(

                      [this.props.menu[t][menu]].map(item=>{
                        return(
                          <div className="col-md-6 menuItems">
                          <div className="textM d-flex">
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
                      })
                    )
                    })
                  }
                </div>
              </div>
              )              
            })

          }
        
      </div>
    )
  }

}

const mapStateToProps = state => ({
  menu: state.restaurantReducer.menu,
});

export default connect(mapStateToProps,{ getMenu })(CustomerMenu)