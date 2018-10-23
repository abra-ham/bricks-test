import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

import { Icon, Panel } from '../../../../components';

import './style.scss';

const options = {
  legend: { enabled: false },
  chart: {
    height: '40%',
    borderRadius: 7
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
    plotLines: [{
      color: '#FF0000',
      width: 2,
      value: 0
    }]
  },
  title: false,
  plotOptions: {
    line: {
      lineWidth: 2,
      marker: { enabled: false },
      dashStyle: 'dash',
      color: '#0477c0',
    },
    column: {
      negativeColor:{
        linearGradient: {
          x1: 0,
          x2: 0,
          y1: 0,
          y2: 1
        },
        stops: [
          [0, '#ff5a60'],
          [1, '#ff7176']
        ]
      },
      color: {
        linearGradient: {
          x1: 0,
          x2: 0,
          y1: 0,
          y2: 1,
          y3: 1
        },
        stops: [
          [0, '#4a90e2'],
          [1, '#0477c0']
        ]
      }
    }
  },
  series: [
    {
      type: 'column',
      data: [1, 2, -3, 5, 6, 7 ,7 ,8, -3, -4 , -6]
    },
    {	
      type: 'line',	
      data: [1, 2, -2,5, 6, 7 ,7 ,8, -3, -4 , -6]
    }
  ]
};

const TransactionsPanel = ({ className }) => {
  return (
    <Panel
      id="transactions"
      className={className}
      styleName="transactions-panel"
      title="Mis Compras / Ventas"
      onClick={()=>{}}
      buttonText="Histórico de mis Ventas"
    >
      <div className="flex center middle">
        <div styleName="icon">
          <Icon name="actualRent" height="70"/>
        </div>
        <div className="flex" styleName="detail">
          <span styleName="item total">
            <span>40</span>
            <span>Ladrillos totales</span>
          </span>
          <span styleName="item">	
            <span>44</span>
            <span>Ladrillos génesis</span>
          </span>
          <Icon name="settings" />
          <div styleName="item">
            <span>22</span>
            <span>Ladrillos comprados</span>
          </div>
          <Icon name="settings" />
          <div styleName="item sold">
            <span>60</span>
            <span>Ladrillos vendidos</span>
          </div>
        </div>
      </div>
      <div id="graph" styleName="graph">
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
    </Panel>
  );
};

export default TransactionsPanel;
