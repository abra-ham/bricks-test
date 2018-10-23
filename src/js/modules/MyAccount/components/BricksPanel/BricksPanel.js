import React from 'react';

import { Panel, Icon } from '../../../../components';

import './style.scss';

const BricksPanel = (props) => {
	return (
		<Panel
			id="my-bricks"
			title="Mis Ladrillos"
			styleName="bricks-panel"
			onClick={() => {}}
			buttonText="Ver mis ladrillos"
		>
			<div id="info" styleName="info-container">
				<div className="flex center middle column" styleName="main-info">
					<Icon name="availableBricks" height="39" width="72"/>
					<span>
						40 Ladrillos
					</span>
				</div>
				<div className="flex center middle" styleName="secondary-info">
					<div className="flex center middle column" styleName="info">
						<span>Ladrillos en portafolio</span>
						<span>40</span>
					</div>
					<div styleName="border-icon">
						<Icon name="settings" />
					</div>
					<div className="flex center middle column" styleName="info">
						<span>Ladrillos en Venta</span>
						<span>45</span>
					</div>
				</div>
			</div>
		</Panel>
	)
}

export default BricksPanel;
