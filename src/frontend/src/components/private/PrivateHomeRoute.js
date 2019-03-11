import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from "react-redux";
import PropTypes from "prop-types";

const PrivateHomeRoute = ({ component: Component, authReducer, ...rest }) => (
    <Route
        {...rest}
        render={props => {
            // if(authReducer.isLoading){
            //     return <h2>Loading...</h2>
            // }
            // else 
            if(!authReducer.isAuthenticated){
                return <Component {...props} />
            }else{
                return <Redirect to="/" />;
            }
            
        }}
    />
);

const mapStateToProps = state => ({
    authReducer: state.authReducer
})

export default connect(mapStateToProps)(PrivateHomeRoute);