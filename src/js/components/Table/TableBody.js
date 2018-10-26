import React from 'react';

import './style.scss';

const TableBody = props => {
  const { className, children } = props;

  return (
    <tbody styleName="table-body" className={className}>
      {children}
    </tbody>
  );
}

export default TableBody;
