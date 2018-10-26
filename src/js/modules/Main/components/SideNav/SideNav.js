import React from 'react';
import cx from 'classnames'
import { Link } from 'react-router-dom';

import formatAmount from '../../../../lib/formatAmount';
import sum from '../../../../lib/sum';
import { Icon } from '../../../../components';

import './style.scss';

const dynamicItems = (accountValue, availableFunds) => {
  return [{ 
    text: 'Valor de la cuenta',
    value: formatAmount(accountValue),
  },
  {
    text: 'Saldo disponible',
    value: formatAmount(availableFunds),
  }]
}

const staticItems = [
  {
    text: 'Mi cuenta',
    icon: 'myAccountOn',
    to: '/my-account'
  },
  {
    text: 'Comprar',
    icon: 'buy',
    to: '/buy'
  },
  {
    text: 'Vender',
    icon: 'sell',
    to: '/sell'
  },
  {
    text: 'Agregar fondos',
    icon: 'fundsAdd',
    to: '/funds-add'
  },
  {
    text: 'Retirar fondos',
    icon: 'fundsWithdraw',
    to: '/funds-withdraw'
  },
  {
    text: 'Movimientos',
    icon: 'movements',
    to: '/movements'
  },
  {
    text: '',
    icon: 'help',
    to: '/help'
  }
]

const Item = ({ text, icon, to, active, value }) => {
  const styleName = cx({
    item: true,
    border: !icon,
    link: !!to,
    active: !!active,
  });

  let node = (
    <React.Fragment>
      <span>{text}</span>
      <span>{value}</span>
    </React.Fragment>
  )

  if (to) {
    node = (
      <Link to={to}>
        <Icon name={icon} height="32"/>
        {text && <span>{text}</span>}
      </Link>
    )
  }

  return (
    <li styleName={styleName}>
      {node}
    </li>
  );
}

const ItemList = ({ pathname, staticItems, dynamicItems }) => {
  return (
    <ul styleName="item-list">
      {dynamicItems.map((item, index) => {
        return <Item {...item} key={index} />
      })}
      {staticItems.map((item, index) => {
        const active = item.to && item.to === pathname;
        return <Item {...item} key={index} active={active} />
      })}
    </ul>
  )
}

const SideNav = ({ pathname, ...props }) => {
  return (
    <div id="sidenav" styleName="sidenav">
      <ItemList
        staticItems={staticItems}
        dynamicItems={dynamicItems(sum('object', props), props.available_cash)}
        pathname={pathname}
      />
    </div>
  )
}

export default SideNav;
