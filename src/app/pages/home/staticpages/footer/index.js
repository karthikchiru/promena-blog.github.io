import React , { useState, useLayoutEffect, useEffect} from 'react'
import './index.scss'
import logo from '../../../../../assets/images/promena.png';
import { useLocation } from 'react-router-dom';
import {getCategoryDetails, userSubscribe} from '../../../../utils/apiCalls';
import Button from '../../../../components/button';

const Footer = () => {
  const location = useLocation();
  let pathName = location.pathname;
  const [email, setEmail] = useState('');
  const [category, setCategory] = useState('');
  const [dropdown, setDropdown] = useState('');
  const [isBtnDisabled, setIsBtnDisabled] = useState(true);

  useEffect(() => {
    getCategoryDetails((res)=>{
console.log(res);
setCategory(res);
    })
  }, [])
  const handleOnChange = (e, key) => {
    setIsBtnDisabled(false);
 let val = e.target.value;
 if(key === 1)
 {
setEmail(val);
 }else{
  setDropdown(val);
 }
 if(email && dropdown)
 {
   setIsBtnDisabled(false);
 }
  };

  const handleClick = ()=>{
    window.scrollTo(0, 0);
  };

  const handleSubscribe = ()=>{
   const payload = {
    User_email_Address:email,
    category_ID:dropdown
    }
    setIsBtnDisabled(false);

      userSubscribe((res)=>{
        console.log(res);
         }, payload); 
  }
useLayoutEffect(() => {
  // handleClick();
}, [handleClick]);

    return (
      <div>
      {(pathName !== '/forgotPassword')?
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
                <input required type='text' value={email} className='footer__right__input' onChange={(e)=>{handleOnChange(e, 1)}} placeholder='Enter Email'></input>
                {/* <input required type='text' className='footer__right__input' placeholder='Enter Last Name'></input>
                <input required type='text' className='footer__right__input' placeholder='Enter Job Title'></input>
                <input required type='text' className='footer__right__input' placeholder='Enter Email'></input> */}
                {/* <div className='topping'>
                <input type='checkbox' id='topping' name='topping' value='SEO' checked={isChecked} onChange={handleOnChange(e, 1)} />
                SEO
                <input type='checkbox' id='topping' name='topping' value='PPC' checked={isChecked} onChange={handleOnChange} />
                PPC
                <input type='checkbox' id='topping' name='topping' value='CONTENT' checked={isChecked} onChange={handleOnChange} />
                CONTENT
                <input type='checkbox' id='topping' name='topping' value='SOCIAL' checked={isChecked} onChange={handleOnChange} />
                SOCIAL
              </div> */}
              {/* <div className='result'>
                Above checkbox is {isChecked ? 'checked' : 'un-checked'}.
              </div> */}
              <select name='select' id='' value={dropdown} onChange={(e)=>{handleOnChange(e, 2)}} >
              <option value='--Select--'>--Select--</option>
              {category.length && category.map((val)=>{
              return(  <option key ={val.category_id} value={val.category_id}>{val.category_name}</option>)
              })}
               
              </select>
                <Button buttonClick={handleSubscribe} isBtnDisabled ={isBtnDisabled} className='footer__right__newsletter'>Subscribe</Button>
            </div>
        </div>:null}
        </div>
    )
}

export default Footer;


