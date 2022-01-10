/* eslint-disable no-debugger */
/* eslint-disable no-unused-vars */



import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { getPostList } from '../../../../utils/apiCalls'
import moment from 'moment';
import './index.scss';
import { Helmet } from 'react-helmet';
import ReadMore from '../readmore';

const AllPosts = () => {

  const [postList, setPostList] = useState([]);

  useEffect(() => {
    getPostList((response) => {
      if(response)
      setPostList(response);
      console.log(response)
    });
  }, []);


  return (

    <div className='card-container'>

      {
        postList.map(post => {
          var url = post.thumbnail;


          return (
            <div className='card' key={post.Blog_id}>
            <Helmet>
                    {/* <title></title> */}
                        <meta  name='category' content={post.category}/>
                        <meta name='description' content = {post.content}/>
                    </Helmet>
              <NavLink className='card__title' to={`/post/${post.Blog_id}`}>
                {post.title}
              </NavLink>
              <h1>{post.category}</h1>
              <div className='card__content'>
                <img src={url} key={post.Blog_id} className='card__image' />
                <ReadMore className='readmore-content' post = {post.content} />
              </div>
              <ul className='card__ul1'>
                <li><i className='fa fa-clock-o' aria-hidden='true'> {moment(post.date_created).format('MMM-Do-YY, hh:mm A') }</i></li>
                <li><i className='fa fa-eye' aria-hidden='true'></i> 75 reads</li>
                <li><i className='fa fa-clock-o' aria-hidden='true'></i> 3 min read</li>
              </ul>
            </div>
          )
        })
      }
    </div>
  )

}

export default React.memo(AllPosts);