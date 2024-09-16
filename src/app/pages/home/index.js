/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import './index.scss';
import Banner from './staticpages/banner';
import Postlist from './postlist';
import AllPosts from '../home/components/allpost';
import Tabs from './staticpages/tabs';

const Home = () => {

    const [switchPost, setSwitchPost] = useState(false);
    const handlePost = () => {
        setSwitchPost(!switchPost);
    }

    return (


        <div className='width-container'>
            <div className='wrap'>
                <div className='wrap__banner'>
                    <Banner />
                </div>
                <div className='wrap__postlist'>
                    <Postlist />
                </div>
            </div>
            <div className='post-tab'>
                <div className='all-posts items'>
                    <AllPosts />
                </div>
                <div className='all-tabs items'>
                    <Tabs />
                </div>

            </div>
        </div>
    )
}

export default Home;
