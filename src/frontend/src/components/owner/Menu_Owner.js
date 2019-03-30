import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types"
import { addCategory, getCategories, deleteCategory, deleteItem } from "../../actions/menu";
import queryString from 'query-string';
import AddItemModal from "./AddItemModal";
import EditItemModal from "./EditItemModal";
import EditCategoryModal from "./EditCategoryModal";
import { Link } from 'react-router-dom';


export class Menu_Owner extends Component {
    state = {
        newCategory: "",
        rID: queryString.parse(this.props.location.search).id,
        restaurantName: ""
    };

    static propTypes = {
        addCategory: PropTypes.func.isRequired
    }

    componentDidMount(){
      this.props.getCategories(this.state.rID);
      const { rName } = this.props.match.params;
      this.setState({restaurantName: rName});
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
        
            <form onSubmit={this.onSubmit} >
              <div className="form-group row mt-5">
                <Link to={`/`} className="btn btn-dark btn-sm col-md-1">Back To Restaurants</Link>
                <h2 className="col-md-6">{this.state.restaurantName}'s Menu</h2>
                <input type="text" name="newCategory" onChange={this.onChange} value={newCategory} className="form-control input-large col-md-3" placeholder="Category Name" required/>
                <div className="col-md-2">
                  <button type="submit" className="btn btn-primary mb-2">Add Category</button>
                </div>
              </div>
            </form>
          
        <hr/>
        {contentKeys.map(i=>
          
          <div>
            <div className="text-center">
              <div className="row justify-content-center">
                <h4>{i}</h4>
                <div className="dropdown">
                  <button className="btn btn-light btn-sm dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  
                  </button>
                  <div className="dropdown-menu">
                    <AddItemModal category={i} rID={this.state.rID}/>
                    <EditCategoryModal category={i} rID={this.state.rID}/>
                    <div className="dropdown-divider"></div>
                    <button onClick={this.props.deleteCategory.bind(this, i, this.state.rID)} className="dropdown-item">Delete</button>
                  </div>
                </div>
              </div>
              <div className="row">
                {Object.keys(this.props.categories[i]).map(j => 
                  [this.props.categories[i][j]].map(item => 
                    <div className="col-md-6 menuItems">
                      <div className="textM d-flex">
                        <div className="one-forth">
                          <button onClick={this.props.deleteItem.bind(this, this.state.rID, i, j)} className="btn btn-danger btn-sm btn-block">Delete</button>
                          <EditItemModal Name={item.Name} Description={item.Description} Price={item.Price} category={i} rID={this.state.rID} itemID={j}/>
                        </div>
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
    categories: state.restaurantReducer.categories,
  });

export default connect(mapStateToProps, { addCategory, getCategories, deleteCategory, deleteItem })(Menu_Owner);
