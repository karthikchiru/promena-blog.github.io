/* eslint-disable no-debugger */
/* eslint-disable no-unused-vars */



import React, { useState, useEffect } from 'react';
import profile from 'assets/images/profile.png'
import blogPost from '../../data/blog.json';
import { NavLink } from 'react-router-dom';
import {getPostList} from '../../../../utils/apiCalls'
import moment from 'moment';
import './index.scss'
import ReadMore from '../readmore';
import axios from 'axios';

const AllPosts  = (props) => {

  const [posts, setPosts] = useState([]);
const [postList, setPostList] = useState([]);
// const [base64, setBase64] = useState('');
// console.log(base64)
// useEffect(() => {
//   axios
//     .get(
//       'http://promenablog.pythonanywhere.com/Blog/BlogPost').then((res)=>{
//         res.data.map((resp)=>{
//           var binaryData = [];
//           console.log(resp.thumbnail)
// binaryData.push(resp);
// setBase64(URL.createObjectURL(new Blob(binaryData, {type: 'application/image'})));
//         })
//       })
//     }, []);

  useEffect(()=>{
    const posts = blogPost.data;
    setPosts(posts);
    getPostList((response)=>{
      setPostList(response);
    })
  }, []);

  return(

    <div className='card-container'>

{
  postList.map(post => {
    var url = post.thumbnail;
var pathname = new URL(url).pathname;

    return(
      <div className='cards' key={post.Blog_id}>
<img src={pathname} key={post.Blog_id} className='card-image' />
<div className='main-content'>
<h3 className='lead1'>
    <NavLink  className = 'post-title' to={`/post/${post.Blog_id}`}>  
   {post.title}
   </NavLink>
    </h3>

    <div className='card-content'>
      <h1>{post.category}</h1>
      <ReadMore post={post.content}/>
 
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