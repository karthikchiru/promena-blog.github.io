/* eslint-disable react/jsx-key */

import React, { useState, useEffect } from 'react';
import blogPost from '../../data/blog.json';
import './index.scss'
import { NavLink } from 'react-router-dom';


// eslint-disable-next-line no-unused-vars
const Sidebar  = (props) => {

  const [posts, setPosts] = useState([]);

  useEffect(()=>{

    const posts = blogPost.data;
    setPosts(posts);
  }, posts);

  return(

    <div className='main1'>

{
  posts.map(post => {

    return(
      <div className='posts'>
      <img src={post.blogImage} className='posts__image' />

<div className='posts__maincontent'>
<p className='posts__lead2'>
<NavLink className= 'posts__link' key={post.id} to={`/post/${post.id}`}>  
<div className = 'posts__title'>{post.blogTitle}
</div>  </NavLink>
</p>

<div className='posts__content'>
 <h4>Surfing in Maldives</h4>
 <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, recusandae.</p>

</div>
<ul className='posts__ul'>
   <li><i className='fa fa-clock-o' aria-hidden='true'> 30 hours ago</i></li>
   <li><i className='fa fa-eye' aria-hidden='true'></i> 75 reads</li>
   <li><i className='fa fa-clock-o' aria-hidden='true'></i> 3 min read</li>
 </ul>
</div>

  </div>
)

    
  })
}
    </div>
   )

 }

export default Sidebar;