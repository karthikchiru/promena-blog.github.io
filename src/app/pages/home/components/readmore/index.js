import React, { useState } from 'react';
import './index.scss'
// import PropTypes from 'prop-types';

const ReadMore = ({post}) => {
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {setIsReadMore(!isReadMore)};

  return (
    <p className='read-more'>
      {isReadMore ? post.slice(0, 200): post }
      {post.length > 200 &&
        <span onClick={toggleReadMore} className='read-more1'>
          {isReadMore ? '...Read More' : ' ...Show less'}
        </span>
      }
    </p>
  )
}


export default ReadMore;