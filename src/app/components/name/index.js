import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';
import Arrow from '../../../assets/images/arrow-forward-black.png';

const Name = ({ title, tabTitle }) => {
  return (
    <div className='name__header'>
      {tabTitle ?
        <div> {tabTitle} <img src={Arrow} alt='arrow' className='name__img'/>
          <span className='name__header name__sub-header'> {title}</span>
        </div>
        :
        <span> {title}</span>
      }
    </div>
  )
}
Name.propTypes = {
  title: PropTypes.string,
  tabTitle: PropTypes.string
};

Name.defaultProps = {
  title: '',
  tabTitle: ''
}

export default React.memo(Name);
