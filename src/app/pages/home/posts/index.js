import React, {useLayoutEffect} from 'react'
import BlogPost from '../components/blogpost';
import Tab from '../staticpages/tab';
import './index.scss'

const Post = (props) => {

  const handleClick = ()=>{
    window.scrollTo(0, 0);
  };

  useLayoutEffect(() => {
  handleClick();
  }, []);

  return(
<div className='post-container'>
<div className='post-wrapper'>
<div className='common blogpost'>
<BlogPost {...props}/>
</div>

<div className='common post-sidebar'><Tab /></div>
</div>
<div className='post-read-button '>

  <span onClick={handleClick} className='read-next' role='button' >Read Next <i className='fas fa-angle-down'></i></span>
</div>
</div>

   )

 }

export default Post