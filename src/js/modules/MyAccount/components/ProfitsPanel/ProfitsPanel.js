import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

import formatAmount from '../../../../lib/formatAmount';
import { Icon, Panel } from '../../../../components';

import options from './chartOptions';
import './style.scss';

const BorderIcon = () => (
  <div styleName="icon-container">
    <div styleName="icon-border icon-border-left"></div>
    <Icon name="minus" height="22" width="22" />
    <div styleName="icon-border icon-border-right"></div>
  </div>
);

const ProfitsPanel = ({ data }) => {
  const { profit } = data;
  return (
    <Panel title="Mis Rendimientos" id="profits" styleName="profits-panel">
      <div id="info" styleName="info-container">
        <div className="flex center middle column" styleName="info">
          <span>Mi Rendimiento:</span>
          <span>{formatAmount(profit)}</span>
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
          <Icon name="actualYearlyRent" height="35" />
          <div className="flex left column">
            <span>Otros:</span>
            <span>$435,000</span>
          </div>
        </div>
      </div>
      <div id="graph" styleName="graph">
        <HighchartsReact highcharts={Highcharts} options={options(data.transactions)} />
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
