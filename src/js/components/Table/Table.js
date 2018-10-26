import React from 'react';

import TableHeader from './TableHeader';
import TableBody from './TableBody';
import TableRow from './TableRow';
import HeadColumns from './HeadColumns';
import DefaultRows from './DefaultRows';
import Cell from './Cell';
import './style.scss';

const Table = (props) => {
  const { defaultRows, columns, items, ...others } = props;
  return (
    <table styleName="table" {...others}>
      <TableHeader>
        <HeadColumns columns={columns} />
      </TableHeader>
      <TableBody>
        {items.map(item => (
          <TableRow key={item.id}>
            {columns.map(column => <Cell key={`${item.id}-${column.propertyName}`} item={item} column={column} />)}
          </TableRow>
        ))}
        {DefaultRows(defaultRows, items.length)}
      </TableBody>
    </table>
  );
}

export default Table;
