import React from 'react';

import './style.scss';

const TableHeader = ({ className, children }) => {
  return (
    <thead styleName="table-header" className={className}>
      {children}
    </thead>
  );
}

export default TableHeader;
