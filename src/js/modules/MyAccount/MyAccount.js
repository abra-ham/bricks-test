import React from 'react';

import { Title, Button, Footer } from '../../components';

import { AccountValue, ProfitsPanel, BricksPanel, MyRentsPanel, TransactionsPanel } from './components';
import './style.scss';

const MyAccount = props => {
	return (
		<section id="my-account" styleName="my-account">
			<Title text="Mi cuenta">
				<Button type="button" style="primary">
					Ver flujo de efectivo
				</Button>
			</Title>
			<AccountValue />
			<ProfitsPanel />
			<BricksPanel />
			<div styleName="panels">
				<MyRentsPanel styleName="my-rents" />
				<TransactionsPanel styleName="transactions" />
			</div>
		</section>
	);
}

export default MyAccount;
