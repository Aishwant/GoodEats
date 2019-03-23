import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types"
import { getItems } from "../../actions/menu";

export class Category extends Component {
  componentDidMount(){
    const data = {"rID":this.props.rID, "category":this.props.name};
    this.props.getItems(data);
  }

  render() {
    const contentKeys = Object.keys(this.props.items)
    return (
      <div>
        {this.props.name}
        {contentKeys.map(t=>
          [this.props.items[t]].map(res =>
          <div className="row">
            {res.Name}
          </div>
        ))}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  items: state.restaurantReducer.items
});

export default connect(mapStateToProps, { getItems })(Category);
