import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

import { Icon, Panel } from '../../../../components';

import options from './chartOptions';
import './style.scss';

const safeParams = {
  bricks: {},
  accumulatedSales: []
};

const TransactionsPanel = ({ className, data = safeParams }) => {
  const { bricks, accumulatedSales } = data;
  const { current, purchased, sold, genesis } = bricks;
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
        <div className="flex middle" styleName="detail">
          <span styleName="item total">
            <span>{current}</span>
            <span>Ladrillos totales</span>
          </span>
          <span styleName="item">	
            <span>{genesis}</span>
            <span>Ladrillos génesis</span>
          </span>
          <Icon name="minus" height="22" width="22" />
          <div styleName="item">
            <span>{purchased}</span>
            <span>Ladrillos comprados</span>
          </div>
          <Icon name="minus" height="22" width="22" />
          <div styleName="item sold">
            <span>{sold}</span>
            <span>Ladrillos vendidos</span>
          </div>
        </div>
      </div>
      <div id="graph" styleName="graph">
        <HighchartsReact highcharts={Highcharts} options={options(accumulatedSales)} />
      </div>
    </Panel>
  );
};

export default TransactionsPanel;
