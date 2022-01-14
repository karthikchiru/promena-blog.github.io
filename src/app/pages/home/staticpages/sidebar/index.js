/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import './index.scss'
import { NavLink } from 'react-router-dom';
import { getPostList } from '../../../../utils/apiCalls';
import moment from 'moment';
import ReadMore from '../../components/readmore';


const Sidebar = (props) => {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    getPostList((response) => {
      setPostList(response);
    })
  }, []);

  return (
    <div className='main1'>
      {
        postList.map(post => {
          var url = post.thumbnail;
          return (
            <div className='posts' key={post.Blog_id}>
              <img src={url} key={post.thumbnail} className='posts__image' />
              <div className='posts__maincontent'>
                <NavLink className='posts__link' to={`/post/${post.Blog_id}`}>
                  {post.category}
                </NavLink>
                <h1>{post.title}</h1>
                <ReadMore Blog_id={post.Blog_id} post={post.content} />
              
              <ul className='posts__ul'>
                <li><i className='fa fa-clock-o' aria-hidden='true'> {moment(post.date_created).format('MMM-Do-YY, hh:mm A')}</i></li>
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