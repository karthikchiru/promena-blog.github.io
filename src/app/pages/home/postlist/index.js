import React,{useEffect, useState} from 'react'
import './index.scss';
import { NavLink } from 'react-router-dom';
import blogPost from '../data/blog.json';

const Postlist = () => {

    const [posts, setPosts] = useState([]);

    useEffect(()=>{
  
      const posts = blogPost.data;
      setPosts(posts);
    }, posts);


    return (
        <div className='postlist-banner'>
       
                
                <div key={1} className='postlist first-list'>
                    <i className='first-list__arrow first-list__right'></i>
                    <h2 className='first-list__heading'><NavLink to={`/post/${1}`}>CONTENT MARKETING</NavLink></h2>
                    <span className='first-list__content'>Lorem ipsum dolor sit amet.</span>

                </div>
                { posts.map(val=>{
            return(
                <div key={val.id} className='postlist'>
                        <h2><NavLink to={`/post/${val.id}`}>{val.blogCategory}</NavLink> </h2>
                        <span>{val.blogTitle}</span>
                    </div>
                    
            )
        })}
           
 
        </div>
    )
}

export default Postlist;
