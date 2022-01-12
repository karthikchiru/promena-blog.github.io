import React, {useState} from 'react';
import Sidebar from '../sidebar';
import './index.scss';
const Tabs = () => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };
    return (
         <div>
<div className='post-tab'>
   <div className='blog-tabs'>
        <button
          className={toggleState === 1 ? 'tabs active-tabs' : 'tabs'}
          onClick={() => toggleTab(1)}
        >
          Latest Blog
        </button>
        <button
          className={toggleState === 2 ? 'tabs active-tabs' : 'tabs'}
          onClick={() => toggleTab(2)}
        >
          Trending Blog
        </button>
</div>
</div>
 <div className='content-tabs'>
        <div
          className={toggleState === 1 ? 'content  active-content' : 'content'}
        >
      <div>
      <Sidebar/>
      </div>
          </div>
          <div
          className={toggleState === 2 ? 'content  active-content' : 'content'}
        >
        <div>
       <Sidebar/> 
      </div>
        </div>
         </div>  
        </div>
    )
}

export default Tabs;