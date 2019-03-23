import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types"
import Category from "./Category";
import { addCategory } from "../../actions/menu";
import queryString from 'query-string';

export class Menu_Owner extends Component {
    state = {
        newCategory: ""
    };

    static propTypes = {
        addCategory: PropTypes.func.isRequired
    }

    onChange = e => this.setState({ [e.target.name]: e.target.value });

    onSubmit = e => {
        e.preventDefault();
        const { newCategory } = this.state;
        const rID = queryString.parse(this.props.location.search).id;
        const data = { newCategory, "rID":rID }
        this.props.addCategory(data);
    }

  render() {
    const { newCategory } = this.state
    return (
      <div>
        <form onSubmit={this.onSubmit} className="form-inline">
            <input type="text" name="newCategory" onChange={this.onChange} value={newCategory} className="form-control" placeholder="Category Name" required/>
            <button type="submit" className="btn btn-primary">Add Category</button>
        </form>

        <Category name="Category name"/>
      </div>
    )
  }
}

const mapStateToProps = state => ({
    categories: state.restaurantReducer.categories
  });

export default connect(mapStateToProps, { addCategory })(Menu_Owner);
