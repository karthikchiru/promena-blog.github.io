import React, { useState, useEffect } from 'react';
import profile from 'assets/images/profile.png';
import { NavLink } from 'react-router-dom';
import { getPostList } from '../../../../utils/apiCalls';
import moment from 'moment';
import './index.scss';
import ReadMore from '../readmore';

const AllPosts = () => {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    getPostList((response) => {
      setPostList(response);
    });
  }, []);

  return (
    <div className='card-container'>
      {postList.map((post) => {
        var url = post.thumbnail;
        return (
          <div className='cards' key={post.Blog_id}>
            <img src={url} key={post.Blog_id} className='card-image' />
            <div className='main-content'>
              <h3 className='lead1'>
                <NavLink className='post-title' to={`/post/${post.Blog_id}`}>
                  {post.title}
                </NavLink>
              </h3>
              <div className='card-content'>
                <h1>{post.category}</h1>
                <ReadMore post={post.content} />
              </div>
              <ul className='main-ul1'>
                <li>
                  <i className='fa fa-clock-o' aria-hidden='true'>
                    {' '}
                    {moment(post.date_created).format('ddd-mm-yyyy, A')}
                  </i>
                </li>
                <li>
                  <i className='fa fa-eye' aria-hidden='true'></i> 75 reads
                </li>
                <li>
                  <i className='fa fa-clock-o' aria-hidden='true'></i> 3 min
                  read
                </li>
              </ul>
            </div>
            <div className='padding-class'>
              <img src={profile} className='profile-img' alt='profile-image' />
              <h5>Brison Deon</h5>
            </div>
          </div>
        );
      })}
    </div>
  );
};


export default React.memo(AllPosts);
