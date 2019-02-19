import React, { Component, Fragment } from "react";
import ReactDom from "react-dom";
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import { Provider as AlertProvider } from "react-alert";

import AlertTemplate from 'react-alert-template-basic'

import Header from "./layout/Header";
import Dashboard from "./authentication/Dashboard";
import Alerts from "./layout/Alerts";
import Login from "./authentication/Login";
import Register from "./authentication/Register";
import Footer from "./layout/Footer";

import PrivateRoute from "./private/PrivateRoute";

import { Provider } from "react-redux";
import store from "../store";
import { loadUser } from "../actions/authentication";


//Alert Options
const alertOptions = {
  timeout: 5000,
  position: 'top center'
};


class App extends Component {
  componentDidMount(){
    store.dispatch(loadUser());
  }

  render() {
    return (
      <Provider store={store}>
        <AlertProvider template={AlertTemplate} {...alertOptions}>
          <Router>
            <Fragment>
              <Header />
              <Alerts />
              <div>
                <center>
                  <Switch>
                    <PrivateRoute exact path="/" component={Dashboard} />
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/login" component={Login} />
                  </Switch>
                </center>
              </div>
              <Footer />
            </Fragment>
          </Router>
        </AlertProvider>
      </Provider>
    );
  }
}

ReactDom.render(<App />, document.getElementById("app"));
