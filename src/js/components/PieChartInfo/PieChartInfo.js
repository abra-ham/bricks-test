import React from 'react';

const PieChartInfoItem = () => {
	<div className="flex center middle" styleName="item">
		<span>color</span>
		<span>Inversion</span>
		<span>88%</span>
		<span>$999,999</span>
	</div>
}

const PieChartInfo = ({ title, items = [], total}) => {
	<div>
		<span>Inversión + plusvalía</span>
		<div className="flex center middle column">
			{items.map(item => <PieChartInfoItem />)}
		</div>
		<span>{total}</span>
	</div>
}

