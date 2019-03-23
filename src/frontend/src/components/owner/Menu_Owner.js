import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types"
import Category from "./Category";
import { addCategory, getCategories } from "../../actions/menu";
import queryString from 'query-string';

export class Menu_Owner extends Component {
    state = {
        newCategory: "",
        rID: queryString.parse(this.props.location.search).id
    };

    static propTypes = {
        addCategory: PropTypes.func.isRequired
    }

    componentDidMount(){
      this.props.getCategories(this.state.rID);
    }

    onChange = e => this.setState({ [e.target.name]: e.target.value });

    onSubmit = e => {
        e.preventDefault();
        const { newCategory } = this.state;
        const data = { newCategory, "rID":this.state.rID }
        this.props.addCategory(data);
    }

  render() {
    const { newCategory } = this.state
    const contentKeys = Object.keys(this.props.categories)
    return (
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-xl-6">
            <form onSubmit={this.onSubmit} className="form-inline">
              <div className="form-group">
                <input type="text" name="newCategory" onChange={this.onChange} value={newCategory} className="form-control input-large" placeholder="Category Name" required/>
              </div>
              <button type="submit" className="btn btn-primary mb-2">Add Category</button>
            </form>
          </div>
        </div>
        {contentKeys.map(t=>
          <div>
            <Category name={t} rID={this.state.rID}/>
          </div>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => ({
    categories: state.restaurantReducer.categories
  });

export default connect(mapStateToProps, { addCategory, getCategories })(Menu_Owner);
