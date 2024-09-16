import React , { useState } from 'react';
import LoginModal from '../../loginmodal';
import {userRegistartion, userToken, userComment as createCommentApi, getUserComments} from '../../../../../utils/apiCalls';
import './index.scss';
import Button from 'app/components/button';
import Confirm from 'app/components/confirmModal/confirm';

const CommentForm = ({
  backendComments,
  rootCommentId,
  blogId,
}) => {
  const [text, setText] = useState('');
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [alertText, setAlertText] = useState('');
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
        if(resp.success === 'True')
        {
        setAlertText('Your comment has successfully been posted !');
         getUserComments(()=>{
           if(payload)
           {
            backendComments([...rootCommentId, payload]);
           }
         });
         setShowConfirmModal(true);
        }else{
          setIsBtnDisabled(true);
        }
             }, payload);
     }
    }else{
      let userInfo = JSON.parse(localStorage.getItem('user'));
      if(userInfo !== 'login-target' && userInfo !== null){
      let payload = {
        Blog_id: blogId,
        commentId: ++CommentId,
        name: userInfo.name,
        Comment: text,
        datetime: date,
        email: userInfo.email
       };
       const fiveMinutes = 300000;
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
            setAlertText('Your comment has successfully been posted !');
            getUserComments(()=>{
              if(payload)
           {
            backendComments([...rootCommentId, payload]);
           }
            });
            setShowConfirmModal(true);
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
    setuser(user);
     userRegistartion((response)=>{
       localStorage.setItem('user',JSON.stringify(user));
       let userDetail = JSON.parse(localStorage.getItem('user'));
       let payload = {
         name:userDetail.name,
         email:userDetail.email,
         password:userDetail.password
       }
       if(response.success === 'True')
       {
        userToken((res)=>{
        localStorage.setItem('user-token', res.jwt);
        }, payload);
       }else if(response.email[0] === 'token with this email already exists.'){
        userToken((res)=>{
          if(res.jwt)
          {
            localStorage.setItem('user-token', res.jwt);
          }else if(res.detail === 'user not found'){
            setShowConfirmModal(true);
      setAlertText('user not found, Please check your credentials !')
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
      {showConfirmModal && (
          <Confirm buttonText={'OK'} isCancelRequired={false} confirmTitle={alertText}
            onConfirm={() => { setShowConfirmModal(false) }} onCancel={() => { setShowConfirmModal(false) }} />
        )}
    </div>
  );
};

export default React.memo(CommentForm);
