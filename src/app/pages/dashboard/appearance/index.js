/* eslint-disable react/prop-types */
//www.youtube.com/watch?v=q8cabjyUTVY&t=54s
import React from 'react';
import './index.scss';
import Name from '../../../components/name';
import Color from 'app/components/color';
const Appearance = ()=>{
  return (
    <div className='u_width'>
      <div className='u_page'>
        <div className='pageHeader'>
          <Name title={'Appearance'} />
          <Color/>
          <h1>This is default Theme</h1>
        </div>
      </div>
    </div>
  );
  }

Appearance.propTypes = {
};

Appearance.defaultProps = {
}

export default React.memo(Appearance);