/* eslint-disable quotes */
/* eslint-disable no-debugger */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React , { useState, useEffect } from 'react';
import LoginModal from '../../loginmodal';
import {userRegistartion, userToken, getUserComments as getCommentsApi, userComment as createCommentApi} from '../../../../../utils/apiCalls';
import './index.scss';
import Button from 'app/components/button';
const CommentForm = ({
  rootCommentId,
  blogId,
  initialText = '',
}) => {
  const [text, setText] = useState(initialText);
  const [userRegister, setUserRegister] = useState('');
  const [timeOut, setTimeOut] = useState('');
  const [showLoginConfirmModal, setshowLoginConfirmModal] = useState(false);
  const [user, setuser] = useState({});
  const [isBtnDisabled, setIsBtnDisabled] = useState(true);

  const handleValueChange =(e, key)=>{
let val = e.target.value;
setIsBtnDisabled(true);
if(key === 1)
{
    setText(val);
}
if(text){
  setIsBtnDisabled(false);
}
  }

   const onSubmit = (e)=>{
     debugger;
     e.preventDefault();
     rootCommentId.map((val)=>{
       sessionStorage.setItem('commentId', val.commentId);
       return val.commentId;
     });

     let CommentId = sessionStorage.getItem('commentId');
     let date = new Date();
     let token = localStorage.getItem('user-token');

  
     if(user.name !== undefined || user.name != null)
     {
     let payload = {
      Blog_id: blogId,
      commentId: ++CommentId,
      name: user.name,
      Comment: text,
      datetime: date,
      email: user.email
     };

     if(payload && token)
     {
      createCommentApi((resp)=>{
        console.log(resp);
        if(resp.success === 'True')
        {
          setTimeOut(payload.datetime);
          location.reload();
          getCommentsApi((res)=>console.log);
        }else{
          setIsBtnDisabled(true);
        }
             }, payload);
     }
    }else{
      let userInfo = JSON.parse(localStorage.getItem('user'));
      if(userInfo !== "login-target" && userInfo !== null){
      let payload = {
        Blog_id: blogId,
        commentId: ++CommentId,
        name: userInfo.name,
        Comment: text,
        datetime: date,
        email: userInfo.email
       };
       const fiveMinutes = 60000;
       const timePassed = new Date() - new Date(payload.datetime) > fiveMinutes;
       if(!timePassed)
 {
 localStorage.clear();
 localStorage.removeItem('user-token');
 }
       if(token)
       {
        createCommentApi((resp)=>{

          if(resp.success === 'True')
          {
            setTimeOut(payload.datetime);
            location.reload();
            getCommentsApi((res)=>console.log);
          }else{
            setIsBtnDisabled(true);
          }
               }, payload)
       }
      }
    }

 if(token === null)
 {
  setshowLoginConfirmModal(true);
 }else{
  setText('');
 }
  }

  const onConfirm =(user)=>{
    debugger;
    console.log(user + 'user info from popup');
    setuser(user);
     userRegistartion((response)=>{
       setUserRegister(response);
       localStorage.setItem('user',JSON.stringify(user));
       let userDetail = JSON.parse(localStorage.getItem('user'));
       console.log(userDetail);
       let payload = {
         name:userDetail.name,
         email:userDetail.email,
         password:userDetail.password
       }
       console.log(payload + 'payload to genrate token');
       if(response.success === 'True')
       {
        userToken((res)=>{
        localStorage.setItem('user-token', res.jwt);
        console.log(res)
        }, payload);
       }else if(response.email[0] === 'token with this email already exists.'){
        userToken((res)=>{
          if(res.jwt)
          {
            localStorage.setItem('user-token', res.jwt);
            console.log(res);
          }else if(res.detail === 'user not found'){
alert('user not found, check your credentials');
          }
 
          }, payload);
       }
     }, user);
     setshowLoginConfirmModal(false);
   }

  return (
    <div>
      <textarea
        className='comment-form-textarea'
        placeholder='Tell Your Story'
        value={text}
        onChange={(e) => handleValueChange(e, 1)}
      />
      <Button className='comment-form-button' isBtnDisabled ={isBtnDisabled} buttonClick={onSubmit} >
       Post
      </Button>
      {
  showLoginConfirmModal && (<LoginModal onConfirm={onConfirm} confirmTitle='Login to Continue' buttonText={'LOGIN'} />)
      }
    </div>
  );
};

export default React.memo(CommentForm);
