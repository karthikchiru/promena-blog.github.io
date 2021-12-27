import React from 'react'
import { NavLink } from 'react-router-dom';
import FournotFour from 'assets/images/four-not-four.gif'
import './index.scss'
const PageNotFound = () => {
        return(

            <div className='page-not-found'>
            <h3 className='lead'>Page not found</h3>
            <img src={FournotFour} alt='four-not-four' className='page-not-found__page-items size' />
        
            <div className='page-not-found__page-items'>
               
                <NavLink style={{textDecoration:'none', color:'white'}} to='/' className='page-not-found__page-items__link'><span>Go Back</span></NavLink>
            </div>
            </div>
    
        )
}

export default PageNotFound
