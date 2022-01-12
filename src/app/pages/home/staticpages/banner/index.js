import React from 'react';
import banner1 from '../../../../../assets/images/Artboard1.png'
import banner2 from '../../../../../assets/images/Artboard2.png'
import banner3 from '../../../../../assets/images/Artboard4.png'
import './index.scss'

const Banner = () => {
    return (
<div id='demo' className='carousel slide carousel-fade' data-bs-ride='carousel'>

<div className='carousel-indicators'>
  <button type='button' data-bs-target='#demo' data-bs-slide-to='0' className='active'></button>
  <button type='button' data-bs-target='#demo' data-bs-slide-to='1'></button>
  <button type='button' data-bs-target='#demo' data-bs-slide-to='2'></button>
</div>

<div className='carousel-inner'>
  <div className='carousel-item active'>
    <img src={banner1} alt='Los Angeles' className='d-block' style={{width:'100%'}} />
  </div>
  <div className='carousel-item'>
    <img src={banner2} alt='Chicago' className='d-block' style={{width:'100%'}} />
  </div>
  <div className='carousel-item'>
    <img src={banner3} alt='New York' className='d-block' style={{width:'100%'}} />
  </div>
</div>

<button className='carousel-control-prev' type='button' data-bs-target='#demo' data-bs-slide='prev'>
  <span className='carousel-control-prev-icon'></span>
</button>
<button className='carousel-control-next' type='button' data-bs-target='#demo' data-bs-slide='next'>
  <span className='carousel-control-next-icon'></span>
</button>
</div>
    )
}

export default Banner;
