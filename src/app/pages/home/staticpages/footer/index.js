import React, { useState, useLayoutEffect, useEffect } from 'react';
import './index.scss';
import logo from '../../../../../assets/images/promena.png';
import { useLocation } from 'react-router-dom';
import { getCategoryDetails, userSubscribe } from '../../../../utils/apiCalls';
import Button from '../../../../components/button';
import { regex } from 'app/constants/regex';

const Footer = () => {
  const location = useLocation();
  let pathName = location.pathname;
  const [email, setEmail] = useState('');
  const [category, setCategory] = useState('');
  const [dropdown, setDropdown] = useState('');
  const [isBtnDisabled, setIsBtnDisabled] = useState(true);

  useEffect(() => {
    getCategoryDetails((res) => {
      console.log(res);
      setCategory(res);
    });
  }, []);

  const handleOnChange = (e, key) => {
    setIsBtnDisabled(true);
    let val = e.target.value;
    if (key === 1) {
      setEmail(val);
    } else {
      setDropdown(val);
    }
    if (dropdown && ValidateEmail(email)) {
      setIsBtnDisabled(false);
    }
  };
const ValidateEmail =(email)=>{
const emailRegex = regex.emailRegex;
return emailRegex.test(email);
}

const handleKeyEnter = (e) =>{
  if(e.key === 'Enter' && ValidateEmail(email) && dropdown)
  {
    handleSubscribe();
  }
}
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  const handleSubscribe = () => {
    if(ValidateEmail(email) && dropdown)
    {
    const payload = {
      User_email_Address: email,
      category_ID: dropdown,
    };
    userSubscribe((res) => {
      console.log(res);
    }, payload);
    setCategory('');
    setDropdown('');
    setIsBtnDisabled(false);
  }
  };

  useLayoutEffect(() => {}, [handleClick]);

  return (
    <div>
      {pathName !== '/forgotPassword' ? (
        <div className='footer'>
          <div className='footer__left'>
            <img src={logo} alt='my home' className='footer__logo' />

            <div className='footer__icons'>
              <ul>
                <li>
                  <a
                    href='https://www.facebook.com/PromenaLLP/'
                    className='fa fa-facebook fa-3x'
                  ></a>
                </li>
                <li>
                  <a
                    href='https://api.whatsapp.com/message/DEEJEJJ7JI4KL1'
                    className='fa fa-whatsapp fa-3x'
                  ></a>
                </li>
                <li>
                  <a
                    href='https://in.linkedin.com/company/promena-inc'
                    className='fa fa-linkedin fa-3x'
                  ></a>
                </li>
                <li>
                  <a href='#' className='fa fa-envelope-o fa-3x'></a>
                </li>
              </ul>
            </div>
          </div>
          <div className='footer__center1'>
            <ul>
              <li>
                <a onClick={handleClick} className='desktop-link'>
                   
                  <i className='fas fa-arrow-alt-circle-right'></i> Advertize
                </a>
              </li>
              <li>
                <a onClick={handleClick} className='desktop-link'>
                   
                  <i className='fas fa-arrow-alt-circle-right'></i> Shop SEJ
                </a>
              </li>
              <li>
                <a onClick={handleClick} className='desktop-link'>
                   
                  <i className='fas fa-arrow-alt-circle-right'></i> Privacy
                  Policy
                </a>
              </li>
              <li>
                <a onClick={handleClick} className='desktop-link'>
                   
                  <i className='fas fa-arrow-alt-circle-right'></i> Contact
                </a>
              </li>
              <li>
                <a onClick={handleClick} className='desktop-link'>
                   
                  <i className='fas fa-arrow-alt-circle-right'></i> About
                </a>
              </li>
              <li>
                <a onClick={handleClick} className='desktop-link'>
                   
                  <i className='fas fa-arrow-alt-circle-right'></i> Toolbox
                </a>
              </li>
              <li>
                <a onClick={handleClick} className='desktop-link'>
                   
                  <i className='fas fa-arrow-alt-circle-right'></i> Press
                  Materials
                </a>
              </li>
              <li>
                <a onClick={handleClick} className='desktop-link'>
                   
                  <i className='fas fa-arrow-alt-circle-right'></i> Do Not Sell
                  My Personal Info
                </a>
              </li>
            </ul>
          </div>
          <div className='footer__center2'>
            <ul>
              <li>
                <a onClick={handleClick} className='desktop-link'>
                  <i className='fas fa-arrow-alt-circle-right'></i> SEO Guide
                </a>
              </li>
              <li>
                <a onClick={handleClick} className='desktop-link'>
                   
                  <i className='fas fa-arrow-alt-circle-right'></i> How Search
                  Engines Work
                </a>
              </li>
              <li>
                <a onClick={handleClick} className='desktop-link'>
                   
                  <i className='fas fa-arrow-alt-circle-right'></i> Local SEO
                </a>
              </li>
              <li>
                <a onClick={handleClick} className='desktop-link'>
                   
                  <i className='fas fa-arrow-alt-circle-right'></i> Link
                  Building Guide
                </a>
              </li>
              <li>
                <a onClick={handleClick} className='desktop-link'>
                   
                  <i className='fas fa-arrow-alt-circle-right'></i> On-Page SEO
                  Guide
                </a>
              </li>
              <li>
                <a onClick={handleClick} className='desktop-link'>
                   
                  <i className='fas fa-arrow-alt-circle-right'></i> Technical
                  SEO Guide
                </a>
              </li>
              <li>
                <a onClick={handleClick} className='desktop-link'>
                   
                  <i className='fas fa-arrow-alt-circle-right'></i> How to Do an
                  SEO Audit
                </a>
              </li>
              <li>
                <a onClick={handleClick} className='desktop-link'>
                   
                  <i className='fas fa-arrow-alt-circle-right'></i> SEO Tools
                </a>
              </li>
            </ul>
          </div>
          <div className='footer__right'>
            <h2 className='footer__right__content'>
              Subscribe to 
              <span className='footer__right__subscribe'>PROMENA</span>
            </h2>
            <p className='footer__right__content'>
              Subscribe to our daily newsletter to get the latest industry news.
            </p>
            <input
              required
              type='text'
              value={email}
              onKeyUp={(event) => { handleKeyEnter(event); }}
              className='footer__right__input'
              onChange={(e) => {
                handleOnChange(e, 1);
              }}
              placeholder='Enter Email'
            ></input>
            <select
              className='footer__right__select'
              name='select'
              id=''
              value={dropdown}
              onChange={(e) => {
                handleOnChange(e, 2);
              }}
            >
              <option value='--Select--'>--Select--</option>
              {category.length &&
                category.map((val) => {
                  return (
                    <option key={val.category_id} value={val.category_id}>
                      {val.category_name}
                    </option>
                  );
                })}
            </select>
            <Button
              buttonClick={handleSubscribe}
              isBtnDisabled={isBtnDisabled}
              className='footer__right__newsletter'
            >
              Subscribe
            </Button>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Footer;
