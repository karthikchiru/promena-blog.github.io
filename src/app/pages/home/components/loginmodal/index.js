/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable no-debugger */
/* eslint-disable react/prop-types */
import React, {useState} from 'react'
import PropTypes from 'prop-types';
import './index.scss';
import Button from '../../../../components/button';
import Input from '../../../../components/input';
import { regex } from 'app/constants/regex';

const LoginModal = ({ onConfirm, confirmTitle, buttonText, className }) => {

  const handleClick = e => {
    if (e?.target.id === 'login-target') 
    {
           onConfirm(e?.target.id, obj);
    }
    return;
  }
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [isBtnDisabled, setIsBtnDisabled] = useState(true);

  const validateEmail = (email)=>{
    regex.emailRegex.test(email);
  }
const obj = {
  user:user,
 email: email
}

const handleValueChange =(e, key)=>{
let val= e.target.value;
setIsBtnDisabled(false);
if(key === 1)
{
setUser(val);
}
else if(key === 2)
{
setEmail(val);
}
if(user && validateEmail(email))
{
setIsBtnDisabled(false);
// onConfirm(obj)
}
}
const handleKeyEnter =(e)=>{
    if(e.key === 'Enter'  && user && validateEmail(email))
    {
setIsBtnDisabled(false);
    }
}


  return (
    <div className={`loginmodal ${className}`} id='login-target' onClick={handleClick}>
      <div className='loginmodal__dialog'>
        <div className='loginmodal__dialog__center-div'>
          {/* <div className='loginmodal__dialog__content'>
           
          </div> */}
              <div className='loginmodal__dialog__footer  u_align_items '>
              <p className='loginmodal__dialog__footer__description'>{confirmTitle}</p>
              <span className='loginmodal__dialog__footer__login-title'>User*</span>
                <Input className='loginmodal__dialog__button--cancel' onKeyUp ={(e)=>{handleKeyEnter(e)}}  value={user} onValueChange={(e)=>handleValueChange(e, 1)} placeholder='User Name'/>
                <span className='loginmodal__dialog__footer__login-title'>Email*</span>
                <Input className='loginmodal__dialog__button--cancel' onKeyUp ={(e)=>{handleKeyEnter(e)}} value={email} onValueChange={(e)=>handleValueChange(e, 2)} placeholder='Email'/>
                <Button className='loginmodal__dialog__button'  isBtnDisabled ={isBtnDisabled} buttonClick={()=>onConfirm(obj)}>{buttonText}</Button>
              </div> 
        </div>
      </div>
    </div>
  )
}

LoginModal.prototypes = {
  setuser:PropTypes.func,
  onConfirm: PropTypes.func,
  onCancel: PropTypes.func,
  confirmTitle: PropTypes.string,
  buttonText: PropTypes.string,
  className: PropTypes.string,
  isCancelRequired: PropTypes.bool
}

LoginModal.defaultProps = {
  onConfirm: () => { },
  onCancel: () => { },
  confirmTitle: '',
  buttonText: '',
  className: '',
  isCancelRequired: true
}

export default LoginModal