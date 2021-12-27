/* eslint-disable no-debugger */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React , { useState } from 'react';
import Button from '../../../../../components/button';
import LoginModal from '../../loginmodal';
import {userRegistartion, userToken, getUserToken} from '../../../../../utils/apiCalls';
import './index.scss';
import Confirm from 'app/components/confirmModal/confirm';
const CommentForm = ({
  submitLabel,
  hasCancelButton = false,
  handleCancel,
  initialText = '',
}) => {
  const [text, setText] = useState(initialText);
  const [isBtnDisabled, setIsBtnDisabled] = useState(true);
  const [showLoginConfirmModal, setshowLoginConfirmModal] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [user, setuser] = useState({});
  // const [userToken, setUserToken] = useState('');
  // const [alertText, setAlertText] = useState('');


//   const isTextareaDisabled = text.length === 0;
//   const onSubmit = (event) => {
//     event.preventDefault();
//     handleSubmit(text);
//     setText('');
//   };
  const handleValueChange =(e, key)=>{
    setIsBtnDisabled(true);
let val = e.target.value;
if(key === 1)
{
    setText(val);
    // console.log(val)
}
if(text)
{
    setIsBtnDisabled(false); 
}
  }
  // const onConfirm =(user)=>{
  //   setuser(user);
  //   setshowLoginConfirmModal(false);
  //  }
   const handleComment = ()=>{
     debugger;
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
    <div>
      <textarea
        className='comment-form-textarea'
        placeholder='Tell Your Story'
        value={text}
        onChange={(e) => handleValueChange(e, 1)}
      />
      <Button className='comment-form-button' buttonClick={handleComment} isBtnDisabled = {isBtnDisabled}>
        {submitLabel}
      </Button>
      {/* {showConfirmModal && <Confirm onConfirm={()=>{setShowConfirmModal(false)}}  confirmTitle={alertText}  onCancel={()=>{setShowConfirmModal(false)}} isCancelRequired={false}/>} */}
      {
  showLoginConfirmModal && (<LoginModal    onConfirm={onConfirm} confirmTitle='Login to Continue' buttonText={'LOGIN'} />)
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
    </div>
  );
};

export default CommentForm;
