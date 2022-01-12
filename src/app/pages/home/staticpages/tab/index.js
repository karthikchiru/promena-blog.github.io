import React, { useState } from 'react';
import Sidebar from '../sidebar';
import './index.scss';
const Tab = () => {
  const [toggleState] = useState(1);

  return (
    <div>
      <div className='post-tab'>
        <div className='blog-tab'>
          <button className={toggleState === 1 ? 'tab active-tab' : 'tab'}>
            Recommended
          </button>
        </div>
      </div>
      <div className='content-tab'>
        <div
          className={toggleState === 1 ? 'content  active-content' : 'content'}
        >
          <div>
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tab;
