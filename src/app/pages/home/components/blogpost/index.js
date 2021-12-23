/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */


import React , {useState, useEffect} from 'react';
import './index.scss'
import Chart from '../../charts/barchart';
import blogPost from '../../data/blog.json';
import Button from 'app/components/button';
import LoginModal from '../loginmodal'; 


const BlogPost = (props) => {

  const [post,setPost] = useState({});
  const [user, setuser] = useState({});
  const [comment, setComment] = useState('');
  
  const [isBtnDisabled, setIsBtnDisabled] = useState(true);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const[postId,setPostId] = useState('');
   
  const handleComment = ()=>{
    let isLoggedIn = localStorage.getItem('user-state');
    
    if(isLoggedIn)
    {
      setShowConfirmModal(false);
      setIsBtnDisabled(true);
      localStorage.clear();
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
  const handleValueChange =(e, key)=>{
  let val = e.target.value;
  setIsBtnDisabled(true);
  if(key === 1)
    {
      setComment(val)
    }
    if(comment)
    {
      setIsBtnDisabled(false);
    }
  }
  const onConfirm =(user)=>{
   setuser(user);
   setShowConfirmModal(false);
  }
  
useEffect(()=>{
  // eslint-disable-next-line react/prop-types
  const postId = props.match.params.postId;
  const post = blogPost.data.find(post => post.id == postId);
  setPost(post);
  setPostId(postId);
}, [post, props.match.params.postId]);

if(post.blogImage == '') return null;

  return(
<div className='blog'>

<div className='blog__container'>

<h3 className='blog__post'>{post.blogTitle}</h3>
<div className='post-thumb'>
<span className='blog__post__tag'>{post.blogCategory}</span>
  <img className='blog__img' src={post.blogImage}/>
</div>
<div className='blog__text'>

<div>{post.blogText}</div>
<div className='chart-wrap'>
<Chart/>
</div>
<div className='comment-box'>
  <div className='comment-wrap comment-items'>
<h2>Leave Comment</h2>
    <div className=' comment-items'>
    <span className='comment-title'>Comment*</span>
    <textarea name='' placeholder='Tell Your Story' onChange={(e)=>handleValueChange(e, 1)} className='comment' id='' cols='30' rows='5'></textarea>
    </div>
<div className='submit-button comment-items'>
<Button className='comment-button' buttonClick={handleComment} isBtnDisabled = {isBtnDisabled}>Comment</Button>
</div>
{
  showConfirmModal && (<LoginModal    onConfirm={onConfirm} confirmTitle='Login to Continue' buttonText={'LOGIN'} />)
}
  </div>
</div>
<p className='mt-5 text-muted'>Posted on: {post.postedOn} by {post.author}</p>
</div>

</div>
</div>
  );
 }

export default BlogPost;
