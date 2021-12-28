/* eslint-disable no-debugger */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React , { useState } from 'react';
import LoginModal from '../../loginmodal';
import {userRegistartion, userToken, getUserToken} from '../../../../../utils/apiCalls';
import './index.scss';
const CommentForm = ({
  handleSubmit,
  submitLabel,
  hasCancelButton = false,
  handleCancel,
  initialText = '',
}) => {
  const [text, setText] = useState(initialText);
  const [isBtnDisabled, setIsBtnDisabled] = useState(true);
  const [showLoginConfirmModal, setshowLoginConfirmModal] = useState(false);
  const [user, setuser] = useState({});
  const isTextareaDisabled = text.length === 0;

  const handleValueChange =(e, key)=>{
    setIsBtnDisabled(true);
let val = e.target.value;
if(key === 1)
{
    setText(val);
}
if(text)
{
    setIsBtnDisabled(false); 
}
  }

   const onSubmit = (e)=>{
     debugger;
     e.preventDefault();
     handleSubmit(text, user);
  setIsBtnDisabled(true); 
 let token = sessionStorage.getItem('user-token');
//  getUserToken((resposne)=>{
//    console.log(resposne);
//  })
 if(token)
 {
  setIsBtnDisabled(false); 
  console.log(text);
  setText('');
  setIsBtnDisabled(true);
 }else{
  setIsBtnDisabled(true);
  setshowLoginConfirmModal(true);
 }
  }

  const onConfirm =(user)=>{
    debugger
    setuser(user);
    setshowLoginConfirmModal(false);
    userToken((res)=>{
    sessionStorage.setItem('user-token', res.jwt);
    }, user);
     userRegistartion((response)=>{
       console.log(response)
     }, user);
   }

  return (
    <form onSubmit={onSubmit}>
      <textarea
        className='comment-form-textarea'
        placeholder='Tell Your Story'
        value={text}
        onChange={(e) => handleValueChange(e, 1)}
      />
      <button className='comment-form-button'  isBtnDisabled = {isBtnDisabled}>
        {submitLabel}
      </button>
      {
  showLoginConfirmModal && (<LoginModal onConfirm={onConfirm} confirmTitle='Login to Continue' buttonText={'LOGIN'} />)
      }
      {hasCancelButton && (
        <button
          type='button'
          className='comment-form-button comment-form-cancel-button'
          onClick={handleCancel}
        >
          Cancel
        </button>
      )}
    </form>
  );
};

export default CommentForm;
