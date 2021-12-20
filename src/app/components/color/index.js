/* eslint-disable no-unused-vars */
import React, {useState} from 'react'
import { SketchPicker    } from 'react-color'
 
const Color =()=> {
   let state = {
        background: '#ff4d4d',
      };
      const [colors, setColor] = useState(state);
    
    const handleChangeComplete = (state) => {
        setColor(state.hex);
      };
    return(
        <div>
            <SketchPicker   
             color={colors }
        onChangeComplete={ handleChangeComplete } />
        <div style ={{color:`${colors}`}}><i className='fa fa-cog fa-2x' />Promena-Blog</div>
        </div>
    ) 

};
export default Color;

