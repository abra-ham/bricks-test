import React from 'react';

import TableRow from './TableRow';
import { Icon } from '../';

import './style.scss';

const HeadColumns = ({ columns }) => {
  return (
    <TableRow styleName="custom-table-header">
      {columns.map((column) => {
        const { headerTemplate } = column;
        const isTemplate = typeof headerTemplate === 'function';
        const title = typeof column.label === 'string' ? column.label : '';

        const columnName = [
          (<div tabIndex="0" title={title} key="link">
            {isTemplate ? headerTemplate(column) : <span>{column.label}</span>}
          </div>),
          
        ];

        return (
          <td className={column.propertyName} key={column.propertyName}>
            {columnName}
          </td>
        );
    })}
    </TableRow>
  );
}

export default HeadColumns;
