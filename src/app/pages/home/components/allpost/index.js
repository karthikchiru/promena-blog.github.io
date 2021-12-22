/* eslint-disable no-unused-vars */



import React, { useState, useEffect } from 'react';
import profile from 'assets/images/profile.png'
import blogPost from '../../data/blog.json';
import { NavLink } from 'react-router-dom';
import {getPostList} from '../../../../utils/apiCalls'
import moment from 'moment';
import './index.scss'


const AllPosts  = (props) => {

  const [posts, setPosts] = useState([]);
const [postList, setPostList] = useState([]);
console.log(postList.title)
  useEffect(()=>{

    const posts = blogPost.data;
    setPosts(posts);

    getPostList((response)=>{
      // console.log(response);
      setPostList(response);
    })
  }, []);

  return(

    <div className='card-container'>

{
  postList.map(post => {

    return(
      <div className='cards' key={post.Blog_id}>
<img src={post.thumbnail} className='card-image' />
<div className='main'>
<h3 className='lead1'>
    <NavLink  className = 'post-title' to={`/post/${post.Blog_id}`}>  
   {post.title}
   </NavLink>
    </h3>

    <div className='card-content'>
      <h1>{post.excerpt}</h1>
      <p>{post.content}</p>
 
    </div>
    <ul className='main-ul1'>
        <li><i className='fa fa-clock-o' aria-hidden='true'> {moment(post.date_created).format('ddd-mm-yyyy, A')}</i></li>
        <li><i className='fa fa-eye' aria-hidden='true'></i> 75 reads</li>
        <li><i className='fa fa-clock-o' aria-hidden='true'></i> 3 min read</li>
      </ul>
</div>
<div className = 'padding-class'>
<img src={profile}  className='profile-img'  alt='profile-image' />
<h5>Brison Deon</h5>
</div>

       </div>
    )
  })
}
    </div>
   )

 }

export default AllPosts 