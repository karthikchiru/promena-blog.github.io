import React from 'react';
import { useLocation } from 'react-router-dom';
import './index.scss';
import logo from '../../../assets/images/blogo1.png';

const Header = () => {
  const location = useLocation();
  let pathName = location.pathname;

  return (
    <div>
      {(pathName !== '/' && pathName !== '/forgotPassword' && pathName !== '/registration' && pathName !== '/home') ?
        <div className='header'>
          <img src={logo} alt='my home' className='header__logo' />
        </div> : null
      }
    </div>
  )
};

export default Header;
