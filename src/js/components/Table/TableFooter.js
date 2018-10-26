import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './style.scss';

function TableFooter(props) {
  const {
    className,
    children,
  } = props;

  const styleNames = classnames({
    'table-footer': true,
  });

  return (<tfoot styleName={styleNames} className={className}>
    {children}
  </tfoot>);
}

TableFooter.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

TableFooter.defaultProps = {
  className: '',
};

export default TableFooter;
