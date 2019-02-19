import React, { Fragment } from 'react';
import List from './List';
import Add from './Add';

export default function Dashboard() {
  return (
    <Fragment>
        <List />
        <br />
        <Add />
    </Fragment>
  )
}
