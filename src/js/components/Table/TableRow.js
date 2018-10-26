import React from 'react';

import './style.scss';

const TableRow = ({ className, children, onClick }) => {
  return (
    <tr styleName="table-row" className={className} onClick={onClick} role="button">
      {children}
    </tr>
  );
}

export default TableRow;
