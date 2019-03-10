import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from "prop-types";

export class CustomerMenu extends Component {
  
  static propTypes = {
    resName: PropTypes.string,
  };
  render() {
    const {id} = this.props.match.params
    console.log(id)
    return (
      <div>
        This is Menu {this.props.name}
      </div>
    )
  }

}

const mapStateToProps = state => {
  resName: state.restaurantReducer.resName
}

export default connect(mapStateToProps,{  })(CustomerMenu)