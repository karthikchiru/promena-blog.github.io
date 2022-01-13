import React, {useState} from 'react';
import './index.scss'
import DOMPurify from 'dompurify'
import { NavLink } from 'react-router-dom';

const ReadMore = ({post, Blog_id}) => {
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {setIsReadMore(!isReadMore)};

  return (
   <div>
        <div className='read-more'>
      {isReadMore ?  <p dangerouslySetInnerHTML={{__html:DOMPurify.sanitize(post.length ? post.slice(0, 260):post)}} className='read-more'></p>: <p dangerouslySetInnerHTML={{__html:DOMPurify.sanitize(post)}} className='read-more'></p> }
      {post.length > 200 &&
        <span onClick={toggleReadMore} className='read-more1'>
          {isReadMore ? <NavLink exact to={`/post/${Blog_id}`}>...Read More</NavLink> : null}
        </span>
      }
    </div>
   </div>
  )
}


export default ReadMore;