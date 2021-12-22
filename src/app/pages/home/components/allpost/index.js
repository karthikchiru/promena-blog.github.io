/* eslint-disable no-unused-vars */



import React, { useState, useEffect } from 'react';
import profile from 'assets/images/profile.png'
import blogPost from '../../data/blog.json';
import { NavLink } from 'react-router-dom';
import './index.scss'


const AllPosts  = (props) => {

  const [posts, setPosts] = useState([]);

  useEffect(()=>{

    const posts = blogPost.data;
    setPosts(posts);
  }, posts);

  return(

    <div className='card-container'>

{
  posts.map(post => {

    return(
      <div className='cards' key={post.id}>
<img src={post.blogImage} className='card-image' />
<div className='main'>
<h3 className='lead1'>
    <NavLink  className = 'post-title' to={`/post/${post.id}`}>  
   {post.blogTitle}
   </NavLink>
    </h3>

    <div className='card-content'>
      <h1>Surfing in Maldives</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, recusandae.</p>
 
    </div>
    <ul className='main-ul1'>
        <li><i className='fa fa-clock-o' aria-hidden='true'> 30 hours ago</i></li>
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