import React , { useState, useLayoutEffect} from 'react'
import './index.scss'
import logo from '../../../../../assets/images/promena.png';
import { useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  let pathName = location.pathname;
    const [isChecked, setIsChecked] = useState(false);

  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };

  const handleClick = ()=>{
    window.scrollTo(0, 0);
  };

useLayoutEffect(() => {
  // handleClick();
}, [handleClick]);

    return (
      <div>
      {(pathName !== '/' && pathName !=='/registration' && pathName !== '/forgotPassword')?
        <div className='footer'>
            <div className='footer__left'>
                <img src={logo} alt='my home' className='footer__logo' />

                <div className='footer__icons'>
        <ul>
                    <li><a href='#' className='fa fa-facebook fa-3x'></a></li>
                    <li><a href='#' className='fa fa-twitter fa-3x'></a></li>
                    <li><a href='#' className='fa fa-linkedin fa-3x'></a></li>
                    <li><a href='#' className='fa fa-envelope-o fa-3x'></a></li>
</ul>
                </div>
            </div>
                <div className='footer__center1'>
                <ul>
                    <li><a onClick={handleClick} className='desktop-link'> <i className='fas fa-arrow-alt-circle-right'></i> Advertize</a></li>
                    <li><a onClick={handleClick} className='desktop-link'> <i className='fas fa-arrow-alt-circle-right'></i> Shop SEJ</a></li>
                    <li><a onClick={handleClick} className='desktop-link'> <i className='fas fa-arrow-alt-circle-right'></i> Privacy Policy</a></li>
                    <li><a onClick={handleClick} className='desktop-link'> <i className='fas fa-arrow-alt-circle-right'></i> Contact</a></li>
                    <li><a onClick={handleClick} className='desktop-link'> <i className='fas fa-arrow-alt-circle-right'></i> About</a></li>
                    <li><a onClick={handleClick} className='desktop-link'> <i className='fas fa-arrow-alt-circle-right'></i> Toolbox</a></li>
                    <li><a onClick={handleClick} className='desktop-link'> <i className='fas fa-arrow-alt-circle-right'></i> Press Materials</a></li>
                    <li><a onClick={handleClick} className='desktop-link'> <i className='fas fa-arrow-alt-circle-right'></i> Do Not Sell My Personal Info</a></li>
                    </ul>
                </div>
                <div className='footer__center2'>
                    <ul>
                    <li><a  onClick={handleClick} className='desktop-link'>
                    <i className='fas fa-arrow-alt-circle-right'></i> SEO Guide</a></li>
                    <li><a onClick={handleClick} className='desktop-link'> <i className='fas fa-arrow-alt-circle-right'></i> How Search Engines Work</a></li>
                    <li><a onClick={handleClick} className='desktop-link'> <i className='fas fa-arrow-alt-circle-right'></i>  Local SEO</a></li>
                    <li><a onClick={handleClick} className='desktop-link'> <i className='fas fa-arrow-alt-circle-right'></i> Link Building Guide</a></li>
                    <li><a onClick={handleClick} className='desktop-link'> <i className='fas fa-arrow-alt-circle-right'></i> On-Page SEO Guide</a></li>
                    <li><a onClick={handleClick} className='desktop-link'> <i className='fas fa-arrow-alt-circle-right'></i> Technical SEO Guide</a></li>
                    <li><a onClick={handleClick} className='desktop-link'> <i className='fas fa-arrow-alt-circle-right'></i> How to Do an SEO Audit</a></li>
                    <li><a onClick={handleClick} className='desktop-link'> <i className='fas fa-arrow-alt-circle-right'></i> SEO Tools</a></li>
                    </ul>
                </div>
            <div className='footer__right'>
                <h2 className='footer__content'>Subscribe to <span className='Footer__right__subscribe'>PROMENA</span></h2>
                <p className='footer__content'>Subscribe to our daily newsletter to get the latest industry news.</p>
                <input required type='text' className='footer__right__input' placeholder='Enter First Name'></input>
                <input required type='text' className='footer__right__input' placeholder='Enter Last Name'></input>
                <input required type='text' className='footer__right__input' placeholder='Enter Job Title'></input>
                <input required type='text' className='footer__right__input' placeholder='Enter Email'></input>
                <div className='topping'>
                <input type='checkbox' id='topping' name='topping' value='SEO' checked={isChecked} onChange={handleOnChange} />
                SEO
                <input type='checkbox' id='topping' name='topping' value='PPC' checked={isChecked} onChange={handleOnChange} />
                PPC
                <input type='checkbox' id='topping' name='topping' value='CONTENT' checked={isChecked} onChange={handleOnChange} />
                CONTENT
                <input type='checkbox' id='topping' name='topping' value='SOCIAL' checked={isChecked} onChange={handleOnChange} />
                SOCIAL
              </div>
              <div className='result'>
                Above checkbox is {isChecked ? 'checked' : 'un-checked'}.
              </div>
                <button className='footer__right__newsletter'>Subscribe</button>
            </div>
        </div>:null}
        </div>
    )
}

export default Footer;


