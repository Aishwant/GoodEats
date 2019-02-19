import React, { Component, Fragment } from 'react';
import { withAlert } from "react-alert";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


export class Alerts extends Component {

    static propTypes = {
        error: PropTypes.object.isRequired
    }

    componentDidUpdate(prevProps){
        const { error, alert } = this.props;
        if(error !== prevProps.error){
            if(error.msg) alert.error(error.msg)
        }
    }

    render() {
        return <Fragment />;
    }
}

const mapStateToProp = state => ({
    error: state.errors
})

export default connect(mapStateToProp)(withAlert()(Alerts));