import React, { useState } from 'react';
import './index.scss'
// import PropTypes from 'prop-types';

const ReadMore = ({post}) => {
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {setIsReadMore(!isReadMore)};

  return (
    <p className='read-more'>
      {isReadMore ? post.slice(0, 300): post }
      {post.length > 300 &&
        <span onClick={toggleReadMore} className='read-more1'>
          {isReadMore ? '...Read More' : ' ...Show less'}
        </span>
      }
      <h1 className='view-post'>View Post</h1>
    </p>
  )
}


export default ReadMore;