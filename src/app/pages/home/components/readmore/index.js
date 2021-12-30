import React, {useState} from 'react';
import './index.scss'
import DOMPurify from 'dompurify'
// import PropTypes from 'prop-types';

const ReadMore = ({post}) => {
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {setIsReadMore(!isReadMore)};

  return (
   <div>
        <p className='read-more'>
      {isReadMore ?  <p dangerouslySetInnerHTML={{__html:DOMPurify.sanitize(post.length ? post.slice(0, 200):post)}} className='read-more'></p>: <p dangerouslySetInnerHTML={{__html:DOMPurify.sanitize(post)}} className='read-more'></p> }
      {post.length > 200 &&
        <span onClick={toggleReadMore} className='read-more1'>
          {isReadMore ? '...Read More' : ' ...Show less'}
        </span>
      }
    </p>
   </div>
  )
}


export default ReadMore;