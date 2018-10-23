import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Main from './modules/Main';

const WIP = ({ location }) => <div>{location.pathname + 'abraha'}</div>;

export default () => (
	<Router>
		<Switch>
			<Route exact path="/login" component={WIP} />
			<Route exact path="/:section" component={Main} />
		</Switch>
	</Router>
);
