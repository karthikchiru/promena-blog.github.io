import React, { useEffect, useState } from 'react'
import './index.scss';
import { Helmet } from 'react-helmet';
import { NavLink } from 'react-router-dom';
import { getPostList } from 'app/utils/apiCalls';

const Postlist = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
getPostList((res)=>{
    setPosts(res);
    console.log(res)
});
    }, posts);

    return (
        <div className='postlist-banner'>
            {posts.map(val => {
                return (
                    <div key={val.Blog_id} className='postlist'>
                    <Helmet>
                    {/* <title>{val.title}</title> */}
                        <meta  name='category' content={val.category}/>
                        <meta name='description' content = {val.content}/>
                    </Helmet>
                        <h2><NavLink  to={`/post/${val.Blog_id}`}>{val.category}</NavLink> </h2>
                        <span>{val.title}</span>
                    </div>
                )
            })}
        </div>
    )
}

export default React.memo(Postlist);
