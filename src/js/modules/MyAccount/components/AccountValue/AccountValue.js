import React from 'react';
import './style.scss';

import sum from '../../../../lib/sum';
import formatAmount from '../../../../lib/formatAmount';

import { Icon } from '../../../../components';

const AccountValue = ({ data = {} }) => {
  const {
    brick_investment,
    capital_gain,
    revolving_fund,
    bricks_in_purchase,
    pending_rents,
    available_cash
  } = data;

  return (
    <section id="account-value" styleName="account-value">
      <div id="total" styleName="item polygon-container">
        <span>Valor de la cuenta:</span>
        <span>{formatAmount(sum('object', data))}</span>
      </div>
      <div id="investment" styleName="item">
        <span>Inversión ladrillos</span>
        <span>{formatAmount(brick_investment)}</span>
      </div>
      <Icon name="minus" height="22" width="22" />
      <div id="gains" styleName="item">
        <span>Plusvalía</span>
        <span>{formatAmount(capital_gain)}</span>
      </div>
      <Icon name="minus" height="22" width="22" />
      <div id="fund" styleName="item">
        <span>Fondo revolvente:</span>
        <span>{formatAmount(revolving_fund)}</span>
      </div>
      <Icon name="minus" height="22" width="22" />
      <div id="in-process" styleName="item align-center">
        <span>Ladrillos en proceso de compra</span>
        <span>{formatAmount(bricks_in_purchase)}</span>
      </div>
      <Icon name="minus" height="22" width="22" />
      <div id="pending" styleName="item align-center">
        <span>Renta pendiente de liberar</span>
        <span>{formatAmount(pending_rents)}</span>
        <span styleName="free-rent">Liberar</span>
      </div>
      <Icon name="minus" height="22" width="22" />
      <div id="pending" styleName="item">
        <span>Dinero disponible</span>
        <span styleName="green">{formatAmount(available_cash)}</span>
      </div>
    </section>
  )
}

export default AccountValue;