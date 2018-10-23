import React from 'react';

import { Panel } from '../../../../components';

import './style.scss';

const MyRentsPanel = ({ className }) => {
	return (
		<Panel
			title="Mis Rentas"
			id="my-rents"
			className={className}
			styleName="my-rents-panel"
			onClick={() => {}}
			buttonText="Ver Mis Rentas"
		>
			<span>helllooooo</span>
		</Panel>
	);
}

export default MyRentsPanel;
