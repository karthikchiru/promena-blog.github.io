
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { getPostList } from '../../../../utils/apiCalls'
import moment from 'moment';
import './index.scss';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import ReadMore from '../readmore';

const AllPosts = () => {

  const [postList, setPostList] = useState([]);

  useEffect(() => {
    getPostList((response) => {
      if(response)
      setPostList(response);
    });
  }, []);


  return (
   
    <div className='card-container'>

      {
        postList.map((post, index) => {
          var url = post.thumbnail;


          return (
         
            <div className='card' key={index}>
            <HelmetProvider >
            <Helmet>
                        <meta  name='category' content={post.category}/>
                        <meta name='description' content = {post.content}/>
                    </Helmet>
                    </HelmetProvider>
              <div className='card__img item'>
                <img src={url} key={post.Blog_id} className='card__image' />
              </div>
           <div className='card__main-content item'>
           <NavLink className='card__main-content__category' to={`/post/${post.Blog_id}`}>
                {post.category}
              </NavLink>
           <h1>{post.title}</h1>
              <ReadMore className='card__main-content__readmore-content'  Blog_id={post.Blog_id} post = {post.content} />
              <ul className='card__ul1'>
                <li><i className='fa fa-clock-o' aria-hidden='true'> {moment(post.date_created).format('MMM-Do-YY, hh:mm A') }</i></li>
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

export default React.memo(AllPosts);