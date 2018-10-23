import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

import { Icon, Panel } from '../../../../components';

import './style.scss';

const options = {
	legend: { 
		align: 'right',
		verticalAlign: 'top',
		x: -25,
		y: 1,
		floating: true,
		borderWidth: 0,
	},
	chart: {
		height: '484px',
		marginLeft: 1,
		marginRight: 1,
		marginTop: 0,
		borderRadius: 7,
		style: {
			fontFamily: 'Roboto',
		}
	},
	tooltip: {
		headerFormat: '<span style="text-align: center">4</span>',
		backgroundColor: '#757171',
		borderWidth: 0,
		borderRadius: 0,
		shadow: false,
		formatter: function () {
			let s = '<b>' + this.y + '</b>';
			return s;
		},
	},
	yAxis: {
		gridLineColor: 'rgba(211, 214, 225, 0.26)',
		gridLineWidth: 2,
		title: false,
		labels: {
			align: 'left',
			x: 7,
			y: 27.5
		}
	},
  title: false,
	plotOptions: {
		line: {
			lineWidth: 0.7,
			marker: { enabled: false },
		}
	},
  series: [
		{
			color: '#80afcc',
			data: [1, 2, 3]
		},
		{	
			color: '#7ed321',
			data: [4, 5, 6]
		},{	
			color: 'red',
			data: [7, 8, 9]
		},
	]
};

const BorderIcon = () => (
	<div styleName="icon-container">
		<div styleName="icon-border icon-border-left"></div>
		<Icon name="settings" />
		<div styleName="icon-border icon-border-right"></div>
	</div>
);

const ProfitsPanel = () => {
	return (
		<Panel title="Mis Rendimientos" id="profits" styleName="profits-panel">
			<div id="info" styleName="info-container">
				<div className="flex center middle column" styleName="info">
					<span>Mi Rendimiento:</span>
					<span>$435,000</span>
				</div>
				<div className="flex left middle" styleName="item">
					<Icon name="estimatedRent" width="32" />
					<div className="flex left column">
						<span>Plusvalía:</span>
						<span>$435,000</span>
					</div>
				</div>
				<BorderIcon />
				<div className="flex left middle" styleName="item">
					<Icon name="handshake" width="32" />
					<div className="flex left column">
						<span>Utilidad de ventas:</span>
						<span>$435,000</span>
					</div>
				</div>
				<BorderIcon />
				<div className="flex left middle" styleName="item">
					<Icon name="actualRent" width="32" />
					<div className="flex left column">
						<span>Rentas recibidas:</span>
						<span>$435,000</span>
					</div>
				</div>
				<BorderIcon />
				<div className="flex left middle" styleName="item last">
					<Icon name="estimatedRent" width="32" />
					<div className="flex left column">
						<span>Otros:</span>
						<span>$435,000</span>
					</div>
				</div>
			</div>
			<div id="graph" styleName="graph">
				<HighchartsReact highcharts={Highcharts} options={options} />
				<div styleName="box" className="flex center middle">
					<span>Ene</span>
					<span>Feb</span>
					<span>Mar</span>
					<span>Abr</span>
					<span>May</span>
					<span>Jun</span>
					<span>Jul</span>
					<span>Ago</span>
					<span>Sep</span>
					<span>Oct</span>
					<span>Nov</span>
					<span>Dic</span>
				</div>
			</div>
		</Panel>
	);
};

export default ProfitsPanel;
