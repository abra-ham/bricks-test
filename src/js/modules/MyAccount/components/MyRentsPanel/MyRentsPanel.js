import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

import { Panel, Table } from '../../../../components';

import items from './tableItems';
import columns from './columns';
import options from './chartOptions';
import './style.scss';

const defaultData = {
  estimated: {},
  totals: {},
  current: {}
};

const safeValues = {
  yearly: 0,
  totals: 0
};

const MyRentsPanel = ({ className, data = defaultData }) => {
  const {
    current = safeValues,
    estimated = safeValues,
    totals = safeValues
  } = data;

  console.log({ data })

  const currentPercentage = current.yearly / totals.yearly;
  const estimatedPercentage = estimated.yearly / totals.yearly;

  return (
    <Panel
      title="Mis Rentas"
      id="my-rents"
      className={className}
      styleName="my-rents-panel"
      onClick={() => {}}
      buttonText="Ver Mis Rentas"
    >
      <Table styleName="table" columns={columns} items={items(data)} />
      <div id="chart-container" className="flex">
        <div styleName="chart">
          <HighchartsReact
            highcharts={Highcharts}
            options={options(current.yearly, estimated.yearly)}
          />
        </div>
        <div styleName="chart-info" className="flex column">
          <div className="flex column">
            <div className="flex start middle">
              <div styleName="color green"/>
              <span styleName="percentage">% Renta Actual</span>
              <span>
                <strong>
                  {Math.floor(Math.abs(currentPercentage) * 100).toFixed(0)}%
                </strong>
              </span>
            </div>
            <div className="flex start middle">
              <div styleName="color light-green"/>
              <span styleName="percentage">% Renta Estimada</span>
              <span>
                <strong>
                  {Math.floor(Math.abs(estimatedPercentage) * 100).toFixed(0)}%
                </strong>
              </span>
            </div>
          </div>
        </div>
      </div>
    </Panel>
  );
}

export default MyRentsPanel;
