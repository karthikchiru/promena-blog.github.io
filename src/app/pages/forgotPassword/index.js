/* eslint-disable no-constant-condition */
import React, { useState } from 'react';
import './index.scss';
import Button from '../../components/button/index';
import '../../components/button/index.scss';
import { useHistory } from 'react-router';
import { regex } from '../../constants/regex';
import logo from '../../../assets/images/promena.png';
import Confirm from '../../components/confirmModal/confirm';
import Loader from '../../components/loader';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isBtnDisabled, setIsBtnDisabled] = useState(true);
  const [isToggle, setIsToggle] = useState(false);
  const [isShowEmail, setIsShowEmail] = useState(false);
  const [placeHolder, setPlaceholder] = useState('Enter Email');
  const history = useHistory();
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [alertText, setAlertText] = useState('');
  const [isShowLoader, setIsShowLoader] = useState(false);

  const handleActions = () => {
    if (placeHolder === 'Enter Email') {
   

          setAlertText('An invitation sent to your Email!');
          setShowConfirmModal(true);
          setIsShowEmail(true);
        } else {
          setPlaceholder('Enter Email');
          if (alertText !== 'hi') {
            setAlertText('');
            setShowConfirmModal(true);
          }
        
      setIsBtnDisabled(true);
      document.getElementById('forgot_Common_Field').value = '';
    } if (isShowEmail) {
    setIsShowLoader(true);
      const resetPasswordPayload = {
        newPassword: newPassword,
        email: email,
      };
      const timeout = 3000;
      if (resetPasswordPayload) {

            setAlertText('Your password has been changed successfully!');
            setShowConfirmModal(true);
            setTimeout(() => {
              history.push('/');
            }, timeout);
          } else {
              setAlertText('Password you entered dont match!');
              setShowConfirmModal(true);
          }
          setIsShowLoader(false);
    }
  };

  const validateEmail = (Email) => {
    const emailRegex = regex.emailRegex;
    return emailRegex.test(Email);
  }

  const inputHandler = (event, key) => {
    let val = event?.target.value;
    setIsBtnDisabled(true);
    if (key === 1 && placeHolder === 'Enter Email') {
      setEmail(val);
      if (validateEmail(val)) {
        setIsBtnDisabled(false);
      }
    } else if (key === 2) {
      setNewPassword(val);
    } else if (key === 3) {
      setConfirmPassword(val);
    }
    if (validateEmail(email) && newPassword && confirmPassword) {
      setIsBtnDisabled(false);
    }
  };

  const handleKeyEnter = (e) => {
    if (e.key === 'Enter' && validateEmail(email) && newPassword) {
      handleActions();
    }
  };

  const handleToggle = () => {
    setIsToggle(!isToggle);
  };

  return (
    <div className='ForgotPassword'>
      {!isShowEmail ? (
        <div className='ForgotPassword__container'>
          <div className='ForgotPassword__wrapper'>
            <img
              src={logo}
              alt='Phillip-Logo'
              className='ForgotPassword__logo'
            />
            <div className='u_display_flex u_align_items ForgotPassword__width70 ForgotPassword__header'>
              <div className='ForgotPassword__input__width'>
                <input
                  required
                  type='text'
                  id='forgot_Common_Field'
                  onKeyDown={(event) => {
                    handleKeyEnter(event);
                  }}
                  onChange={(e) => inputHandler(e, 1)}
                  className='ForgotPassword__input'
                  placeholder={placeHolder}
                ></input>
              </div>
            </div>
            <Button
              className='ForgotPassword__button'
              isBtnDisabled={isBtnDisabled}
              buttonClick={() => {
                handleActions();
              }}
            >
              {placeHolder === 'Enter Email' ? 'SUBMIT' : 'SUBMIT'}
            </Button>
          </div>
          {showConfirmModal && alertText && (
            <Confirm buttonText={'OK'} isCancelRequired={false} confirmTitle={alertText}
              onConfirm={() => { setShowConfirmModal(false) }} onCancel={() => { setShowConfirmModal(false) }} />
          )}
        </div>
      ) : (
        <div className='ForgotPassword__container'>
          <div className='ForgotPassword__wrapper'>
            <img
              src={logo}
              alt='Phillip-Logo'
              className='ForgotPassword__logo'
            />
            <div className='u_display_flex u_align_items ForgotPassword__width70'>
              <div className='ForgotPassword__input__width'>
                <input type='password' style={{ display: 'none' }} />
                <input
                  required
                  type='password'
                  onKeyDown={(event) => {
                    handleKeyEnter(event);
                  }}
                  onChange={(e) => inputHandler(e, 2)}
                  className='ForgotPassword__input'
                  placeholder='Enter New Password'
                />
              </div>
            </div>
            <div className='u_display_flex u_align_items ForgotPassword__width70'>
              <div className='ForgotPassword__input__width'>
                <input
                  required
                  type={`${isToggle ? 'text' : 'password'}`}
                  onKeyDown={(event) => {
                    handleKeyEnter(event);
                  }}
                  onChange={(e) => inputHandler(e, 3)}
                  className='ForgotPassword__input'
                  placeholder='Enter Confirm Password'
                />
                <span
                  role='button'
                  className={`${isToggle
                    ? 'fa fa-eye-slash ForgotPassword__icon'
                    : 'fa fa-eye ForgotPassword__icon'
                    }`}
                  onClick={() => {
                    handleToggle();
                  }}
                  onKeyDown={() => {
                    handleToggle();
                  }}
                ></span>
              </div>
            </div>
            <Button
              className='ForgotPassword__button'
              isBtnDisabled={isBtnDisabled}
              buttonClick={() => {
                handleActions();
              }}
            >
              SUBMIT
            </Button>
          </div>
          {isShowEmail && showConfirmModal && alertText && (
            <Confirm buttonText={'OK'} isCancelRequired={false} confirmTitle={alertText}
              onConfirm={() => { setShowConfirmModal(false) }} onCancel={() => { setShowConfirmModal(false) }} />
          )}
        </div>
      )}
      {isShowLoader ? <Loader /> : null}
    </div>
  );
};

export default ForgotPassword;
