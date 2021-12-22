/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react'
import './index.scss';
import logo from '../../../../../assets/images/promena.png'
import { useLocation } from 'react-router-dom';
import {getCategoryDetails, getMenuDetails} from '../../../../utils/apiCalls';

const Header = () => {
  const location = useLocation();
  let pathName = location.pathname;
  const [menu, setMenu] = useState('');
  const [category, setcategory] = useState('');

  useEffect(() => {
    getMenuDetails((response)=>{
      console.log(response);
      setMenu(response)
    });

    getCategoryDetails((response)=>{
      console.log(response);
      setcategory(response)
    });
  }, []);


    return (
     <div>
     {(pathName !== '/' && pathName !== '/registration' && pathName !=='/forgotPassword')?
     <div className='header-wrapper'>
    <nav>
      <input type='checkbox' id='show-search'></input>
      <input type='checkbox' id='show-menu'></input>
      <label forHtml='show-menu' className='menu-icon'><i className='fas fa-bars'></i></label>
      <div className='content'>
      <div className='logo'><a href='#'><img src={logo} alt='logo' /></a></div>
        <ul className='links'>
        <li>
            <a href='#' className='desktop-link'>SEO <i className='fa fa-caret-down' aria-hidden='true'></i></a>
            <input type='checkbox' id='show-seo'></input>
            <label forHtml='show-seo'>Seo</label>
            <ul>
              <li><a href='#'>Drop Menu 1</a></li>
              <li><a href='#'>Drop Menu 2</a></li>
              <li><a href='#'>Drop Menu 3</a></li>
              <li><a href='#'>Drop Menu 4</a></li>
            </ul>
          </li>
{menu.length && menu.map((val, index)=>{
  return(
    <li key = {val.menuid}>
            <a href='#' className='desktop-link'>{val.menuname} <i className='fa fa-caret-down' aria-hidden='true'></i></a>
            <input type='checkbox' id='show-ppc'></input>
            <label forHtml='show-ppc'>Ppc</label>

  <ul>
  {category.length && category.map((value, index)=>{
   return(
   
  <li key={val.menuid}><a href='#'>{(val.menuname === 'PPC'  && value.menuname === 1 ? value.category_name:null) || (val.menuname === 'CONTENT'  && value.menuname === 2 ? value.category_name:null) || (val.menuname === 'SOCIAL'  && value.menuname === 3 ? value.category_name:null)}</a></li>
   );
  })}
   </ul>

          </li>
  )
})}

       
          {/* <li>
            <a href='#' className='desktop-link'>CONTENT <i className='fa fa-caret-down' aria-hidden='true'></i></a>
            <input type='checkbox' id='show-content'></input>
            <label forHtml='show-content'>Content</label>
            <ul>
              <li><a href='#'>Drop Menu 1</a></li>
              <li><a href='#'>Drop Menu 2</a></li>
              <li><a href='#'>Drop Menu 3</a></li>
              <li><a href='#'>Drop Menu 4</a></li>
            </ul>
          </li> */}
          {/* <li>
            <a href='#' className='desktop-link'>SOCIAL <i className='fa fa-caret-down' aria-hidden='true'></i></a>
            <input type='checkbox' id='show-social'></input>
            <label forHtml='show-social'>Social</label>
            <ul>
              <li><a href='#'>Menu Item 1</a></li>
              <li><a href='#'>Menu Item 2</a></li>
              <li><a href='#'>Menu Item 3</a></li>
              <li><a href='#'>Menu Item 4</a></li>
              <li><a href='#'>Menu Item 5</a></li>
            </ul>
          </li> */}
          <li>
            <a href='#' className='desktop-link'>NEWS <i className='fa fa-caret-down' aria-hidden='true'></i></a>
            <input type='checkbox' id='show-news'></input>
            <label forHtml='show-news'>Services</label>
            <ul>
              <li><a href='#'>Drop Menu 1</a></li>
              <li><a href='#'>Drop Menu 2</a></li>
              <li><a href='#'>Drop Menu 3</a></li>
            </ul>
          </li>
          <li><a href='#'>WEBINARS</a></li>
          <li>
            <a href='#' className='desktop-link'>FOLLOW <i className='fa fa-caret-down' aria-hidden='true'></i></a>
            <input type='checkbox' id='show-social-links'></input>
            <label forHtml='show-social-links'>Follow Us</label>
            <ul className='social-links'>
                    {/* <li><a href='#'>Follow Us</a></li> */}
                    <li><a href='#' className='fa fa-facebook fa-3x'></a></li>
                    <li><a href='#' className='fa fa-twitter fa-3x'></a></li>
                    <li><a href='#' className='fa fa-linkedin fa-3x'></a></li>
                    <li><a href='#' className='fa fa-envelope-o fa-3x'></a></li>
            </ul>
          </li>
        </ul>
      </div>
      <label forHtml='show-search' className='search-icon'><i className='fas fa-search'></i></label>
      <form action='#' className='search-box'>
        <input type='text' placeholder='Type Something to Search...' required></input>
        <button type='submit' className='go-icon'><i className='fas fa-long-arrow-alt-right'></i></button>
      </form>
      </nav>
      </div>:null}
      </div>
    )
}

export default Header;
