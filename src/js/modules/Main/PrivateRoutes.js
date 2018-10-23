import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Title } from '../../components';
import trimTitle from '../../lib/trimTitle';

import MyAccount from '../MyAccount';

const WIP = ({ location }) => (
	<section>
		<Title text={trimTitle(location.pathname)} />
	</section>
);

export default () => (
	<Switch>
		<Route exact path="/help" component={WIP} />
		<Route exact path="/buy" component={WIP} />
		<Route exact path="/sell" component={WIP} />
		<Route exact path="/movements" component={WIP} />
		<Route exact path="/funds-add" component={WIP} />
		<Route exact path="/funds-withdraw" component={WIP} />
		<Route exact path="/my-account" component={MyAccount} />
	</Switch>
);
