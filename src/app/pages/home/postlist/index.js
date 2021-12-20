import React from 'react'
import './index.scss';

const Postlist = () => {
    return (
        <div className='postlist-banner'>
            <div className='postlist first-list'>
            <i className='first-list__arrow first-list__right'></i>
                <h2 className='first-list__heading'><a href='#'>SEO</a></h2>
                <span className='first-list__content'>Lorem ipsum dolor sit amet.</span>
            </div>
            <div className='postlist'>
                <h2><a href='#'>CONTENT MARKETING</a> </h2>
                <span>Lorem ipsum dolor sit amet.</span>
            </div>
            <div className='postlist'>
                <h2><a href=''> WORDPRESS</a> </h2>
                <span>Lorem ipsum dolor sit amet.</span>
            </div>
            <div className='postlist'>
                <h2><a href=''> DEVELOPMENT</a> </h2>
                <span>Lorem ipsum dolor sit amet.</span>
            </div>
            <div className='postlist'>
                <h2><a href=''> BUSINESS</a> </h2>
                <span>Lorem ipsum dolor sit amet.</span>
            </div>
            {/* <div className='postlist'>
                <h2><a href='#'>CONTENT MARKETING</a> </h2>
                <span>Lorem ipsum dolor sit amet.</span>
            </div> */}
        </div>
    )
}

export default Postlist;
