import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from "prop-types";

export class CustomerMenu extends Component {
  
  static propTypes = {
    resName: PropTypes.string,
  };

  state = {
    Appetizer: true,
    Main: false,
    Drinks: false
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

  render() {
    let path = location.href+"";
    const {id} = this.props.location.state
    console.log(id)
    let btnStyleA = this.state.Appetizer
      ? { color: "#fff", backgroundColor: "#333", fontSize:"12px!important" }
      : { backgroundColor: "#aaa", fontSize:"12px!important" };
    let btnStyleM = this.state.Main
      ? { color: "#fff", backgroundColor: "#333", fontSize:"12px!important" }
      : { backgroundColor: "#aaa", fontSize:"12px!important" };
    let btnStyleD = this.state.Drinks
      ? { color: "#fff", backgroundColor: "#333", fontSize:"12px!important" }
      : { backgroundColor: "#aaa", fontSize:"12px!important" };
    
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
                  }
                }

    const contentKeys = Object.keys(json);
    console.log(contentKeys)
    const appetizers = contentKeys.map(t=>{
                        return(
                          [json[t]].map(menu=>{
                            return(
                              <div className="col-md-6">
                                <div className="text d-flex">
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
                      console.log(appetizers)
    
    return (
      <div className="container">
        This is Menu {this.props.name}
        <div className="text-center">
          <button
            type="button"
            className="btn"
            style={btnStyleA}
            onClick={this.onClickAppetizer.bind(this)}
            data-toggle="modal"
            data-target="#ownerModalCenter"
          >
            Appetizer
          </button>{" "}
          <button
            type="button"
            className="btn"
            style={btnStyleM}
            onClick={this.onClickMain.bind(this)}
          >
            Main
          </button>{" "}
          <button
            type="button"
            className="btn"
            style={btnStyleD}
            onClick={this.onClickDrinks.bind(this)}
          >
            <i className="fas fa-glass-cheers">{" "} Drink</i>
          </button>{" "}
        </div>
        <br />

        <div className="row">
          {this.state.Appetizer ? appetizers:''}
        </div>
      </div>
    )
  }

}

const mapStateToProps = state => {
  resName: state.restaurantReducer.resName
}

export default connect(mapStateToProps)(CustomerMenu)