import React from 'react';
import './index.scss';
import NewPosts from './pages/newposts';
import AllPosts from './pages/allposts';
import PropTypes from 'prop-types';

const Reasons = ({ activeSubTab }) => {
  return (
    <div className='u_width'>
      <div className='u_page'>
        {activeSubTab === 'allposts' &&
          <AllPosts />
        }
        {activeSubTab === 'newpost' &&
          <NewPosts />
        }
      </div>
    </div>
  );
};

Reasons.propTypes = {
  activeSubTab: PropTypes.string
};

Reasons.defaultProps = {
  activeSubTab: ''
}

export default React.memo(Reasons);
