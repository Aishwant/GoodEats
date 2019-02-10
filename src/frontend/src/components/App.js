import React, { Component, Fragment } from 'react';
import ReactDom from 'react-dom';

import Header from './layout/Header';

import Dashboard from './authentication/Dashboard';

class App extends Component {
    render(){
        return (
            <Fragment>
                <Header />
            
            <div>
                <center>
                    <Dashboard />
                </center>
            </div>
            </Fragment>
        )
    }
}


ReactDom.render(<App />, document.getElementById('app'));