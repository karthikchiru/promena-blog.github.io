import React from 'react';
import PropTypes from 'prop-types';

import search from 'assets/images/search.svg';
import exit from '../../../assets/images/exit.svg';
import './index.scss';

const Search = ({
  value,
  placeholder,
  classname,
  onChange,
  clearTextHandler,
  handleKeyEnter,
  type
}) => {
  return (
    <div className={`searchBar ${classname}`}>
      <img
        className='searchBar__searchIcon'
        src={search}
        alt='searchIcon'
      />
      <span className='searchBar__devider'></span>
      <input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`searchBar__textInput ${classname}`}
        type={type}
        onKeyDown={handleKeyEnter}
        min={0}
      />
      {value && (
        <img
          src={exit}
          alt=''
          onClick={clearTextHandler}
          className='searchBar__closeIcon'
        />
      )}
    </div>
  );
};

Search.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  classname: PropTypes.string,
  onChange: PropTypes.func,
  clearTextHandler: PropTypes.func,
  type: PropTypes.string,
  handleKeyEnter: PropTypes.func
};

Search.defaultProps = {
  className: '',
  value: '',
  placeholder: 'search',
  classname: '',
  onChange: '',
  clearTextHandler: '',
  type: 'text',
  handleKeyEnter: () => { }
};

export default React.memo(Search);
