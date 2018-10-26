import React from 'react';
import TableRow from './TableRow';

const DefaultRows = (defaultRows, itemsSize) => {
  const rowsToRender = itemsSize > defaultRows ? 0 : defaultRows - itemsSize;
  const rows = [];

  for (let i = 1; i <= rowsToRender; i += 1) {
    const row = <TableRow key={`defaultrow-${i}`} className="empty-row" />
    
    rows.push(row);
  }

  return rows;
}

export default DefaultRows;
