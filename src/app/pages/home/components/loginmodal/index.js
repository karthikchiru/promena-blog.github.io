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
  const [password, setPassword] = useState('');
  const [isBtnDisabled, setIsBtnDisabled] = useState(true);

  const validateEmail = (email)=>{
    regex.emailRegex.test(email);
  }
const obj = {
  name:user,
  email: email,
  password:password
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
else if(key === 3)
{
setPassword(val);
}
if(user && validateEmail(email) && password)
{
setIsBtnDisabled(false);
// onConfirm(obj)
}
}
const handleKeyEnter =(e)=>{
  if(e.key === 'Enter'  && user && validateEmail(email) && password)
    {
setIsBtnDisabled(false);
    }
}


  return (
    <div className={`loginmodal ${className}`} id='login-target' onClick={handleClick}>
      <div className='loginmodal__dialog'>
        <div className='loginmodal__dialog__center-div'>
              <div className='loginmodal__dialog__footer  u_align_items '>
              <p className='loginmodal__dialog__footer__description'>{confirmTitle}</p>
              <span className='loginmodal__dialog__footer__login-title'>User*</span>
                <Input className='loginmodal__dialog__inputs' onKeyUp ={(e)=>{handleKeyEnter(e)}}  value={user} onValueChange={(e)=>handleValueChange(e, 1)} placeholder='User Name'/>
                <span className='loginmodal__dialog__footer__login-title'>Email*</span>
                <Input className='loginmodal__dialog__inputs' onKeyUp ={(e)=>{handleKeyEnter(e)}} value={email} onValueChange={(e)=>handleValueChange(e, 2)} placeholder='Email'/>
                <span className='loginmodal__dialog__footer__login-title'>Password*</span>
                <Input className='loginmodal__dialog__inputs' onKeyUp ={(e)=>{handleKeyEnter(e)}} value={password} onValueChange={(e)=>handleValueChange(e, 3)} placeholder='Password'/>
                </div>
                <div className='loginmodal__dialog__submit'>
                <Button className='loginmodal__dialog__submitbtn'  isBtnDisabled ={isBtnDisabled} buttonClick={()=>onConfirm(obj)}>{buttonText}</Button>
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