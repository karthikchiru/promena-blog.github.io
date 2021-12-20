/* eslint-disable react/prop-types */
import './index.scss';
import PropTypes from 'prop-types';
import React from 'react';

const Dropdown = ({ option, onChange, className, placeholder, value, isRequired, name, id, isDisabled }) => {
  return (
    <select onChange={onChange} id={id} name={name} value={value} className={`dropdown ${className}`} required={isRequired} disabled={isDisabled}>
      <option disabled selected value={value} className='dropdown__text'>
        {placeholder}
      </option>
      {option.map((element, index) => (
        <option key={index} className='dropdown__pointer'  value={element.value}>{element.label}</option>
      ))}
    </select>
  );
};

Dropdown.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func,
  option: PropTypes.array,
  isRequired: PropTypes.bool,
  value:PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  isDisabled: PropTypes.bool,
  placeholder: PropTypes.string
};

Dropdown.defaultProps = {
  className: '',
  onChange: () => { },
  option: [],
  isRequired: false,
  value: 0,
  name: '',
  id: '',
  isDisabled: false,
  placeholder: ''
};

export default React.memo(Dropdown);
