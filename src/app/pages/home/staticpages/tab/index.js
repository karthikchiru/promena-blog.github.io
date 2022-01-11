import React, {useState} from 'react';
import Sidebar from '../sidebar';
import './index.scss';
const Tab = () => {
  const [toggleState] = useState(1);
//   const toggleTab = (index) => {
//     setToggleState(index);
//   };
    return (
         <div>
<div className='post-tab'>
   <div className='blog-tab'>
        <button
          className={toggleState === 1 ? 'tab active-tab' : 'tab'}
        //   onClick={() => toggleTab(1)}
        >
          Recommended 
        </button>
</div>
</div>
 <div className='content-tab'>
        <div
          className={toggleState === 1 ? 'content  active-content' : 'content'}
        >
        {/* <h1 className='content-h1'>This tab is recomended Posts</h1> */}
      <div>
      <Sidebar/>
      </div>
          </div>
         </div>  
        </div>
    )
}

export default Tab;