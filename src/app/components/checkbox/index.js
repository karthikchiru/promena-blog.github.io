import React from 'react';
import './index.scss';
import PropTypes from 'prop-types';

const Checkbox = ({ onChange, isChecked, className ,name,isRequired,value}) => {
  return (
    <input
      id={name}
      className={className}
      type='checkbox'
      onChange={onChange}
      checked={isChecked}
      required={isRequired}
      value={value}
    />
  );
};

Checkbox.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func,
  isChecked: PropTypes.bool,
  isRequired:PropTypes.bool,
  value : PropTypes.string,
  name : PropTypes.string
};

Checkbox.defaultProps = {
  className: '',
  onChange: '',
  isChecked: '',
  isRequired:false,
  value : '',
  name: ''
};

export default React.memo(Checkbox);
