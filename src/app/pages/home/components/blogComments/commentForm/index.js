/* eslint-disable react/prop-types */
import React , { useState } from 'react';
import Button from '../../../../../components/button';
import LoginModal from '../../loginmodal';
import './index.scss';
const CommentForm = ({
  submitLabel,
  hasCancelButton = false,
  handleCancel,
  initialText = '',
}) => {
  const [text, setText] = useState(initialText);
  const [isBtnDisabled, setIsBtnDisabled] = useState(true);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [user, setuser] = useState({});
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
}
if(text)
{
    setIsBtnDisabled(false); 
}
  }
  const onConfirm =(user)=>{
    setuser(user);
    setShowConfirmModal(false);
   }
   const handleComment = ()=>{
    let isLoggedIn = localStorage.getItem('user-state');
    if(isLoggedIn)
    {
      setShowConfirmModal(false);
      setIsBtnDisabled(true);
      localStorage.clear();

    //   document.getElementById('Common_Field').value = '';
    }
    else{
      setShowConfirmModal(true);
      setIsBtnDisabled(true);
      if(user !=='' || user !== undefined)
      {
        setIsBtnDisabled(false);
      }
    }
  }
  return (
    <div>
      <textarea
        className='comment-form-textarea'
        value={text}
        onChange={(e) => handleValueChange(e, 1)}
      />
      <Button className='comment-form-button' buttonClick={handleComment} isBtnDisabled = {isBtnDisabled}>
        {submitLabel}
      </Button>
      {
  showConfirmModal && (<LoginModal    onConfirm={onConfirm} confirmTitle='Login to Continue' buttonText={'LOGIN'} />)
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
