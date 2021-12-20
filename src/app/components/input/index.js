import './index.scss';
import PropTypes from 'prop-types';

const Input = ({ type, placeholder, className, onValueChange, value, isRequired, name, max_length, min_length, id, isDisabled, pattern }) => {
  return (
    <div className='input'>
      <input
        onChange={onValueChange}
        className={`input__text ${className} ${isDisabled && 'input__disabled'}`}
        value={value}
        min={type === 'number' ? 0 : 0}
        max={name === 'week_day' ? 6 : Infinity}
        step={type === 'numeric' ? 'any' : (type === 'time' ? 60 : 1)}
        placeholder={placeholder}
        required={isRequired}
        name={name}
        maxLength={max_length ? max_length : 524288}
        minLength={min_length ? min_length : 0}
        id={id}
        disabled={isDisabled}
        pattern={pattern}
        type={type === 'numeric' ? 'number' : type}
      />
    </div>
  );
};

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  onValueChange: PropTypes.func,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  label: PropTypes.string,
  isRequired: PropTypes.bool,
  name: PropTypes.string,
  max_length: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  min_length: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  id: PropTypes.string,
  isDisabled: PropTypes.bool,
  pattern: PropTypes.string
};

Input.defaultProps = {
  type: 'text',
  placeholder: '',
  className: '',
  isRequired: false,
  onValueChange: () => { },
  value: '',
  label: '',
  name: '',
  max_length: 524288,
  min_length: 0,
  id: '',
  isDisabled: false,
  pattern: ''
};

export default Input;
