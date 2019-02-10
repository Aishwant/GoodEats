import React, { Fragment } from 'react';
import Login from './Login';
import Register from './Register';

export default function Dashboard() {
  return (
    <Fragment>
        <Login />
        <Register />
    </Fragment>
  )
}
