import React from 'react';
import cx from 'classnames';

import './style.scss';

const Button = ({ children, type, style }) => {
  const styleName = cx({
    [`btn-${style}`]: Boolean(style),
  });

  return (
    <button type={type} styleName={styleName}>
      {children}
    </button>
  )
}

export default Button;
