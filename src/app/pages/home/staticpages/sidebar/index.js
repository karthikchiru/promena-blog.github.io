/* eslint-disable react/jsx-key */

import React, { useState, useEffect } from 'react';
import './index.scss'
import { NavLink } from 'react-router-dom';
import {getPostList} from '../../../../utils/apiCalls';
import moment from 'moment';
import ReadMore from '../../components/readmore';


// eslint-disable-next-line no-unused-vars
const Sidebar  = (props) => {

  const [postList, setPostList] = useState([]);

  useEffect(()=>{
    fetchData();
  }, []);

  const fetchData = () =>{
    getPostList((response)=>{
      console.log(response);
      setPostList(response);
    })
  }
  return(

    <div className='main1'>

{ postList.length &&
  postList.map(post => {

    return(
      <div className='posts' key={post.Blog_id}>
      <img src={post.thumbnail} key={post.thumbnail} className='posts__image' />
      <div className='posts__maincontent'>
      <h3 className='posts__lead2'>
          <NavLink  className = 'posts__link' to={`/post/${post.Blog_id}`}>  
         {post.title}
         </NavLink>
          </h3>
      
          <div className='posts__content'>
            <h1>{post.category}</h1>
            <ReadMore post={post.content}/>
       
          </div>
          <ul className='posts__ul'>
          <li><i className='fa fa-clock-o' aria-hidden='true'> {moment(post.date_created).format('ddd-mm-yyyy, A')}</i></li>
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