import React from 'react';
import cx from 'classnames';

const Cell = ({ item, column, className }) => {
  const { propertyName, template } = column;
  const isTemplate = typeof template === 'function';

  const classes = cx({
    [className]: !!className,
    [propertyName]: true,
  });

  const value = item[propertyName];

  return (
    <td key={`${item.id}-${propertyName}`} className={classes}>
      <div>{isTemplate ? template(item) : value}</div>
    </td>
  );
}

export default Cell;
