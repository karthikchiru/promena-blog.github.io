import React from 'react'
import BlogPost from '../components/blogpost';
// import Sidebar from '../staticpages/sidebar';
import Tabs from '../staticpages/tabs';
import './index.scss'

const Post = (props) => {

  return(
<div className='post-container'>
<div className='post-wrapper'>
<div className='common blogpost'>
<BlogPost {...props}/>
</div>

<div className='common post-sidebar'><Tabs/></div>
</div>
<div className='post-read-button '>

  <span className='read-next' role='button' >Read Next <i className='fas fa-angle-down'></i></span>
  <hr  className='line' /> 
</div>
</div>

   )

 }

export default Post