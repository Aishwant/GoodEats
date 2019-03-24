import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types"
import Category from "./Category";
import { addCategory, getCategories, deleteCategory, deleteItem } from "../../actions/menu";
import queryString from 'query-string';
import AddItemModal from "./AddItemModal";
import EditItemModal from "./EditItemModal";

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
        <hr/>
        {contentKeys.map(i=>
          
          <div>
            <div className="text-center">
              <div className="row justify-content-center">
                <h4>{i}</h4>
                <AddItemModal category={i} rID={this.state.rID}/>
                <button onClick={this.props.deleteCategory.bind(this, i, this.state.rID)} className="btn btn-danger btn-sm">Delete</button>
              </div>
              <div className="row">
                {Object.keys(this.props.categories[i]).map(j => 
                  [this.props.categories[i][j]].map(item => 
                    <div className="col-md-6 menuItems">
                      <div className="textM d-flex">
                        <button onClick={this.props.deleteItem.bind(this, this.state.rID, i, j)} className="btn btn-danger btn-sm">Delete</button>
                        <EditItemModal Name={item.Name} Description={item.Description} Price={item.Price} category={i} rID={this.state.rID} itemID={j}/>
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
                )}
          </div>
          </div>
          </div>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => ({
    categories: state.restaurantReducer.categories
  });

export default connect(mapStateToProps, { addCategory, getCategories, deleteCategory, deleteItem })(Menu_Owner);
