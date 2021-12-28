/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */


import React , {useState, useEffect} from 'react';
import './index.scss'
import Chart from '../../charts/barchart';
import blogPost from '../../data/blog.json';
import Comments from '../blogComments/comments';

const BlogPost = (props) => {
  const [post,setPost] = useState({});
  const[postId,setPostId] = useState('');
   
 
useEffect(()=>{
  const postId = props.match.params.postId;
  const post = blogPost.data.find(post => post.id == postId);
  setPost(post);
  setPostId(postId);
}, [post, props.match.params.postId]);

if(post.blogImage == '') return null;

  return(
<div className='blog__container'>
<div className='post-thumb'>

<span className='blog__post__tag'>{post.blogCategory}</span>
  <img className='blog__img' src={post.blogImage}/>
</div>
<div className='blog__text'>
<div>{post.blogText}</div>
</div>

<div className='comment-box'>
  <div className='comment-wrap comment-items'>
<Comments
        commentsUrl='http://localhost:3000/comments'
        currentUserId='1'
      />
  </div>
</div>
<div className='chart-wrap'>
<Chart/>
</div>
<p className='mt-5 text-muted'>Posted on: {post.postedOn} by {post.author}</p>
</div>
  );
 }

export default BlogPost
