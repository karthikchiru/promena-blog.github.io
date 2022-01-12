import React, { useEffect, useState } from 'react'
import './index.scss';
import { Helmet,   HelmetProvider } from 'react-helmet-async';
import { NavLink } from 'react-router-dom';
import { getPostList } from 'app/utils/apiCalls';

const Postlist = () => {
    const [posts, setPosts] = useState([]);

useEffect(() => {
getPostList((res)=>{
setPosts(res);
});
    }, []);

    return (
        <div className='postlist-banner'>
            {posts.map((val, index )=> {
                return (
                    <div key={index} className='postlist'>
                    <HelmetProvider>
                    <Helmet>
                        <meta  name='category' content={val.category}/>
                        <meta name='description' content = {val.content}/>
                    </Helmet>
                    </HelmetProvider>
                        <h2><NavLink  to={`/post/${val.Blog_id}`}>{val.category}</NavLink> </h2>
                        <span>{val.title}</span>
                    </div>
                )
            })}
        </div>
    )
}

export default React.memo(Postlist);
