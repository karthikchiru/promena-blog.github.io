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
                    <strong className={`postlist__triangle--${index ===0 ? 'active':'disabled'}`}>▶</strong>
                        <h2><NavLink className={`postlist__category-link--${index ===0 ? 'active':'disabled'}`} to={`/post/${val.Blog_id}`}>{val.category}</NavLink> </h2>
                        <span className={`postlist__category-span--${index ===0 ? 'active':'disabled'}`} >{val.title}</span>
                    </div>
                )
            })}
        </div>
    )
}

export default React.memo(Postlist);
