import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Title } from '../../components';
import trimTitle from '../../lib/trimTitle';

import MyAccount from '../MyAccount';
import axios from 'axios';

const WIP = ({ location }) => (
  <section>
    <Title text={trimTitle(location.pathname)} />
  </section>
);

const PrivateRoutes = props => {
  const { accountValue, userId } = props;

  if (!userId) {
    return null;
  }

  return (
    <Switch>
      <Route exact path="/help" component={WIP} />
      <Route exact path="/buy" component={WIP} />
      <Route exact path="/sell" component={WIP} />
      <Route exact path="/movements" component={WIP} />
      <Route exact path="/funds-add" component={WIP} />
      <Route exact path="/funds-withdraw" component={WIP} />
      <Route
        exact
        path="/my-account"
        render={routeProps => <MyAccount {...routeProps} accountValue={accountValue} userId={userId} />}
      />
    </Switch>
  )
}

export default PrivateRoutes;
