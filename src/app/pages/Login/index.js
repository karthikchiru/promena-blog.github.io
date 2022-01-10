/* eslint-disable no-debugger */
import React, { useState } from 'react';
import './index.scss';
import Button from '../../components/button/index';
import { regex } from '../../constants/regex';
import { useHistory } from 'react-router';
import logo from '../../../assets/images/promena.png';
import Confirm from '../../components/confirmModal/confirm';
import Loader from '../../components/loader';
import img from '../../../assets/images/login-img.png'
import {adminLogin} from '../../utils/apiCalls';
 
const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isBtnDisabled, setIsBtnDisabled] = useState(true);
  const [isToggle, setIsToggle] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [alertText, setAlertText] = useState('');
  const [isShowLoader, setIsShowLoader] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  localStorage.removeItem('token');

  const payload = {
    email: email,
    password: password,
  };

const handleLogin = () => {
setIsShowLoader(true);
if (validateEmail(email) && password) {
      setIsLoggedIn(false);
adminLogin((response)=>{
  console.log(response);
if(response.jwt)
{
  localStorage.setItem('token', response.jwt);
history.push('/home');
setIsBtnDisabled(false);
}else{
setShowConfirmModal(true);
setIsShowLoader(false);
setAlertText(response.detail);
}
    }, payload)
    localStorage.setItem('user-state', isLoggedIn);
}
}

  const validateEmail = (Email)=> {
    const emailRegex = regex.emailRegex;
    return emailRegex.test(Email)
;
  };

  const inputHandler = (event, key) => {
    let val = event?.target.value;
    setIsBtnDisabled(true);
    if (key === 1) {
      setEmail(val);
    } else {
      setPassword(val);
    }
    if (validateEmail(email)
 && password) {
      setIsBtnDisabled(false);
    }
  };

  const handleKeyEnter = (e) => {
    if (e.key === 'Enter' && validateEmail(email) && password) {
      handleLogin();
    }
  };

  const handleToggle = () => {
    setIsToggle(!isToggle);
  };

  return (
  
    <div className='login'>
      <div className='login__container'>
      <img className='login__img' src = {img} alt = 'bg_image' />
        <div className='login__wrapper'>
          <img src={logo} alt='Phillip-Logo' className='login__logo' />
          <p className = 'login__content'>Welcome back! Please login to continue.</p>
          <div className='u_display_flex u_align_items login__width70'>
            <div className='login__input__width'>
            <i className='fad fa-envelope envelope1'></i>
              <input required type='text' onKeyUp={(event) => { handleKeyEnter(event); }}
                onChange={(e) => inputHandler(e, 1)} className='login__input' placeholder='Enter Email'></input>
            </div>
          </div>
          <div className='u_display_flex u_align_items login__width70'>
            <div className='login__input__width'>
            <i className='fad fa-lock lock1'></i>
              <input required type={`${isToggle ? 'text' : 'password'}`} onKeyUp={(event) => { handleKeyEnter(event); }}
                onChange={(e) => inputHandler(e, 2)} className='login__input' placeholder='Enter Password' />
              <span role='button' tabIndex={0} className={`${isToggle ? 'fa fa-eye-slash login__icon' : 'fa fa-eye login__icon'}`}
                onClick={() => { handleToggle() }} onKeyDown={() => { handleToggle() }}></span>
            </div>
          </div>
          
         <div className='login__linkwrapper'>
         <span role='button' className='login__password' onClick={() => { history.push('/forgotPassword'); }}>
            Forgot password ? </span>
         </div>
           
          <Button className='login__button1' isBtnDisabled={isBtnDisabled} buttonClick={() => { handleLogin(); }} >
            LOGIN </Button>
            <span role='button' className='login__element1' onClick={() => { history.push('/registration'); }}>
            Create an Account </span>
        </div>
        
        {showConfirmModal && (
          <Confirm buttonText={'OK'} isCancelRequired={false} confirmTitle={alertText}
            onConfirm={() => { setShowConfirmModal(false) }} onCancel={() => { setShowConfirmModal(false) }} />
        )}
        {isShowLoader ? <Loader /> : null}
      </div>
   </div>     
  );
};

export default Login;