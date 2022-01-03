/* eslint-disable no-debugger */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React , { useState, useEffect } from 'react';
import LoginModal from '../../loginmodal';
import {userRegistartion, userToken, getUserToken, userComment as createCommentApi} from '../../../../../utils/apiCalls';
import './index.scss';
const CommentForm = ({
  handleSubmit,
  commentId,
  blogId,
  submitLabel,
  hasCancelButton = false,
  handleCancel,
  initialText = '',
}) => {
  const [text, setText] = useState(initialText);
  const [isBtnDisabled, setIsBtnDisabled] = useState(true);
  const [userRegister, setUserRegister] = useState('');
  const [showLoginConfirmModal, setshowLoginConfirmModal] = useState(false);
  const [matchTokens, setMatchTokens] = useState('');
  const [user, setuser] = useState({});
  const isTextareaDisabled = text.length === 0;
console.log(commentId);

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
     let date = new Date();
     let payload = {
      Blog_id: blogId,
      commentId: commentId++,
      name: user.name,
      Comment: text,
      datetime: date,
      email: user.email
     };
     console.log(payload)
     e.preventDefault();
     if(user.name !== undefined && user.email !== undefined && payload)
     {
      createCommentApi((resp)=>{
        console.log(resp);
             }, payload)
     }
    //  else if(userDetail && token)
    //  {
    //    payload.name = userDetail.name;
    //    payload.email = userDetail.email;
    //   createCommentApi((resp)=>{
    //     console.log(resp);
    //          }, payload)
    //  }

    //  handleSubmit(text);
  setIsBtnDisabled(true); 
 let token = sessionStorage.getItem('user-token');
//  getUserToken((resposne)=>{
//    console.log(resposne);
//  })
 if(token !==null)
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
    debugger;
    console.log(user);
    setuser(user);
     userRegistartion((response)=>{
       console.log(response);
       setUserRegister(response);
       let payload = {
         name:response.name,
         email:response.email,
         password:response.password
       }
       if(payload !=='undefined')
       {
        userToken((res)=>{
        sessionStorage.setItem('user-token', res.jwt);
        sessionStorage.setItem('user', user);
        }, payload);
       }
     }, user);
     setshowLoginConfirmModal(false);
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
