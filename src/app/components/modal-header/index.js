import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';
import exit from 'assets/images/exit.svg'
const ModalHeader = (props) => {
  const {
    title, closeModal, isRightSideBtn, isLeftSideBtn, customClassName
  } = props;

  return (
    <div className={`modalHeader ${customClassName}`}>
      {
        isLeftSideBtn
        && (
          <img
            src='/images/arrow-back-black.svg'
            alt=''
            onClick={closeModal}
            role='presentation'
            className='modalHeader__backBtn'
          />
        )
      }
      <span className='modalHeader__title'>{title}</span>
      {
        isRightSideBtn
        && (
          <img
            src={exit}
            alt=''
            onClick={closeModal}
            role='presentation'
            className='modalHeader__closeBtn'
          />
        )
      }
    </div>
  );
};

ModalHeader.propTypes = {
  title: PropTypes.string.isRequired,
  closeModal: PropTypes.func,
  isRightSideBtn: PropTypes.bool,
  isLeftSideBtn: PropTypes.bool,
  customClassName: PropTypes.string
};

ModalHeader.defaultProps = {
  closeModal: () => {null},
  isRightSideBtn: true,
  isLeftSideBtn: false,
  customClassName: ''
};

export default ModalHeader;
