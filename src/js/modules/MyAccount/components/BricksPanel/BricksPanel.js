import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

import formatAmount from '../../../../lib/formatAmount';
import { Panel, Icon } from '../../../../components';
import industriesOptions from './industriesChartOptions';
import profitsOptions from './profitsChartOptions';

import './style.scss';

const BricksPanel = ({ data = {} }) => {
  const { on_portfolio, on_sale, investment, capital_gain, industries = {}} = data;

  const {
    houses = 0,
    industrial = 0,
    offices = 0,
    commercial = 0,
  } = industries;

  const total = houses + industrial + offices + commercial;
  const housesPercentage = houses / total;
  const industrialPercentage = industrial / total;
  const officesPercentage = offices / total;
  const commercialPercentage = commercial / total;

  const totalGains = investment + capital_gain;
  const gainsPercentage = capital_gain / totalGains;
  const investmentPercentage = investment / totalGains;

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
            {`${on_portfolio + on_sale} Ladrillos`} 
          </span>
        </div>
        <div className="flex center middle" styleName="secondary-info">
          <div className="flex center middle column" styleName="info">
            <span>Ladrillos en portafolio</span>
            <span>{on_portfolio}</span>
          </div>
          <div styleName="border-icon">
            <Icon name="minus" height="22" width="22" />
          </div>
          <div className="flex center middle column" styleName="info">
            <span>Ladrillos en Venta</span>
            <span>{on_sale}</span>
          </div>
        </div>
      </div>
      <div id="chart" styleName="chart-container">
        <div className="flex start center" >
          <div styleName="chart">
            <HighchartsReact
              highcharts={Highcharts}
              options={profitsOptions(investment, capital_gain)}
            />
          </div>
          <div styleName="chart-info">
            <div styleName="title">Inversión + Plusvalía</div>
            <div className="flex column">
              <div className="flex space-between middle">
                <div styleName="color green"/>
                <span styleName="gains">Inversión</span>
                <span styleName="percentage">{Math.floor((Math.abs(investmentPercentage) * 100)).toFixed(0)}%</span>
                <span>{formatAmount(investment)}</span>
              </div>
              <div className="flex space-between middle">
                <div styleName="color light-green"/>
                <span styleName="gains">Plusvalía</span>
                <span styleName="percentage">{Math.floor((Math.abs(gainsPercentage) * 100)).toFixed(0)}%</span>
                <span>{formatAmount(capital_gain)}</span>
              </div>
              <div styleName="total">
                <span>Total <strong>{formatAmount(totalGains)}</strong></span>
              </div>
            </div>
          </div>
          <div styleName="chart last">
            <HighchartsReact
              highcharts={Highcharts}
              options={industriesOptions(industries)}
            />
          </div>
          <div styleName="chart-info">
            <div styleName="title">Ladrillos por industria</div>
            <div className="flex column">
              <div className="flex space-between">
                <div styleName="color blue"/>
                <span styleName="type">Industrial</span>
                <span styleName="percentage">{Math.abs(industrialPercentage) * 100}%</span>
                <span>{formatAmount(industrial)}</span>
              </div>
              <div className="flex space-between">
                <div styleName="color light-blue"/>
                <span styleName="type">Comercial</span>
                <span styleName="percentage">{Math.abs(commercialPercentage) * 100}%</span>
                <span>{formatAmount(commercial)}</span>
              </div>
              <div className="flex space-between">
                <div styleName="color lighter-blue"/>
                <span styleName="type">Casa habitación</span>
                <span styleName="percentage">{Math.abs(housesPercentage) * 100}%</span>
                <span>{formatAmount(houses)}</span>
              </div>
              <div className="flex space-between">
                <div styleName="color lightest-blue"/>
                <span styleName="type">Oficina</span>
                <span styleName="percentage">{Math.abs(officesPercentage) * 100}%</span>
                <span>{formatAmount(offices)}</span>
              </div>
              <div styleName="total">
                <span>Total <strong>{formatAmount(total)}</strong></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Panel>
  )
}

export default BricksPanel;
