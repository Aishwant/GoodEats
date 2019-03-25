import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types"
import { getItems } from "../../actions/menu";
import AddItemModal from "./AddItemModal";

export class Category extends Component {
  componentDidMount(){
    const data = {"rID":this.props.rID, "category":this.props.name};
    this.props.getItems(data);
  }

  render() {
    const contentKeys = Object.keys(this.props.items)
    return (
      <div className="text-center">
        <div className="row justify-content-center">
          <h4>{this.props.name}</h4>
          <AddItemModal category={this.props.name} rID={this.props.rID}/>
          <button className="btn btn-danger">Delete</button>
        </div>
        <div className="row">
        {contentKeys.map(t=>
            [this.props.items[t]].map(res =>
              <div className="col-md-6 menuItems">
                <div className="textM d-flex">
                  <div className="one-half"> 
                    <h3>{res.Name}</h3>
                    <p><span>{res.Description}</span></p>
                  </div>
                  <div className="one-forth">
                    <span className="price">${res.Price}</span>
                  </div>
                </div>
              </div>
        ))}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  items: state.restaurantReducer.items
});

export default connect(mapStateToProps, { getItems })(Category);
