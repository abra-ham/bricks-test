import React from 'react';
import './style.scss';

import { Icon } from '../../../../components';

const AccountValue = props => {
	return (
		<section id="account-value" styleName="account-value">
			<div id="total" styleName="item polygon">
				<span>Valor de la cuenta:</span>
				<span>$1'000,000</span>
			</div>
			<div id="investment" styleName="item">
				<span>Inversión ladrillos</span>
				<span>$100,000</span>
			</div>
			<Icon name="settings" />
			<div id="gains" styleName="item">
				<span>Plusvalía</span>
				<span>$1000</span>
			</div>
			<Icon name="settings" />
			<div id="fund" styleName="item">
				<span>Valor de la cuenta:</span>
				<span>$10,000</span>
			</div>
			<Icon name="settings" />
			<div id="in-process" styleName="item align-center">
				<span>Ladrillos en proceso de compra</span>
				<span>$1.000.000</span>
			</div>
			<Icon name="settings" />
			<div id="pending" styleName="item align-center">
				<span>Renta pendiente de liberar</span>
				<span>$1.000.000</span>
			</div>
			<Icon name="settings" />
			<div id="pending" styleName="item">
				<span>Dinero disponible</span>
				<span>$100</span>
			</div>
		</section>
	)
}

export default AccountValue;