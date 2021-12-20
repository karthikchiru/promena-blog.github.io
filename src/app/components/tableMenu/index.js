import React from 'react';
import './index.scss';
import PropTypes from 'prop-types';

const TableMenu = (props) => {
  const { onCancel } = props;
  const handleClick = (e) => {
    if (e?.target.id === 'menu') {
      onCancel();
    }
    return;
  };

  return (
    <div className='table-menu' id='menu' onClick={handleClick}>
      <div className='table-menu__divider'></div>
      <div className='table-menu__item'>Unblock User</div>
      <div className='table-menu__arrow-left'></div>
    </div>
  );
};

TableMenu.propTypes = {
  onCancel: PropTypes.func,
};

TableMenu.defaultProps = {
  onCancel: () => {},
};

export default TableMenu;
