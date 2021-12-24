/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import PropTypes from 'prop-types';
import '../../containers/modal/index.scss';
import Button from '../../components/button/index';
import '../../components/button/index.scss';
// eslint-disable-next-line react/prop-types
const Modal = ({ onCancel, onConfirm, commonTitle }) => {
  const [alertText, setAlertText] = useState('');
  const [isBtnDisabled, setIsBtnDisabled] = useState(true);
  const [isDropdownVisible, setisDropdownVisible] = useState(false);
  const [isCalcDropdownVisible, setisCalcDropdownVisible] = useState(false);
  const categoryDropdown = [{
    name:'Mango',
    value:'Mango'
  },
  {
    name:'Cherry',
    value:'Cherry'
  },
  {
    name:'Lemon',
    value:'Lemon'
  },];
  const [itemList, setitemList] = useState(categoryDropdown);
const calcDropdown = [{
  name:'Multiply',
  value:'Multiply'
},
{
  name:'Addition',
  value:'Addition'
},
{
  name:'Division',
  value:'Division'
},
{
  name:'Division',
  value:'Division'
},
{
  name:'Division',
  value:'Division'
}
];

const [calcList, setcalcList] = useState(calcDropdown);
const [selectedItemIndex, setselectedItemIndex] = useState(null);
const [selectedCalcIndex, setselectedCalcIndex] = useState(null);

  const handleClick = e => {
    if (e?.target.id === 'dialog-target') {
      onCancel();
    }
    return;
  }

const handleConfirm = ()=>{
  if(alertText.length >3)
  {
    setIsBtnDisabled(false);
    // alert('Record submitted succesfully!');
    onConfirm();
  }
}
  const handleValueChange = (event, key) => {
    let val = event?.target.value;
    setIsBtnDisabled(true);
    if (key === 1) {
      setAlertText(val);
    } else if (key === 2) {
      setAlertText(val);
    } else if (key === 3) {
      // setAlertText(val);
    } else {
      // setAlertText(val);
    }
    if(alertText.length >3){
      setIsBtnDisabled(false);
    }

  }

  const handleKeyEnter = (e) => {
    if (e.key === 'Enter' && alertText.length>3) {
      handleConfirm();
    }
}

  return (
    <div className='overlay' id='dialog-target' onClick={handleClick}>
      <div className='overlay__dialog'>
        <div className='overlay__dialog__title'>
          <p className='overlay__dialog__title__description'>{commonTitle}</p>
           <div className='overlay__dialog__title__cancelbackground__cancel-box' onClick={onCancel}>
                     <span className='overlay__dialog__title__cancelbackground__cross overlay__dialog__title__cancelbackground__right-arrow'></span>
                     <span className='overlay__dialog__title__cancelbackground__cross overlay__dialog__title__cancelbackground__left-arrow'></span>
                  </div>
        </div>
        <div className='overlay__dialog__elements'>
          <div className='overlay__dialog__elements__input'>
            <input type='text' placeholder='Paste URL *' onKeyDown={(event) => { handleKeyEnter(event) }}  onChange={(event) => {
              handleValueChange(event, 1)
            }} className = 'overlay__dialog__elements__custominput'></input>
          </div>

          <div className='overlay__dialog__elements__txtaria'>
            <textarea name='' id='' cols='10' rows='12' placeholder ='Description *' onKeyDown={(event) => { handleKeyEnter(event) }} className='overlay__dialog__elements__textwidth' onChange={(event) => {
              handleValueChange(event, 2);
            }}></textarea>
          </div>
          <div className='overlay__dialog__elements__custom-dropdown'>
            <div className='overlay__dialog__elements__custom-dropdown__selection'    onClick = {e=>{setisDropdownVisible(!isDropdownVisible)}}>
              {selectedItemIndex !== null ? itemList[selectedItemIndex].name:'Select Categories *'}
            </div>
            {isDropdownVisible ? <div className='overlay__dialog__elements__custom-dropdown__items-holder'>
              {itemList.map((val, i)=>(
                <div key ={val.value} onClick ={(e)=>{setselectedItemIndex(i); setisDropdownVisible(false);}} className='overlay__dialog__elements__custom-dropdown__items-holder__dropdown-item'>
                  {val.name}
                </div>
              ))}
            </div>:null}
          </div>
          <div className='overlay__dialog__elements__custom-dropdown'>
            <div className='overlay__dialog__elements__custom-dropdown__selection'    onClick = {e=>{setisCalcDropdownVisible(!isCalcDropdownVisible)}}>
              {selectedCalcIndex !== null ? calcList[selectedCalcIndex].name:'Select Calculator *'}
            </div>
            {isCalcDropdownVisible ? <div className='overlay__dialog__elements__custom-dropdown__items-holder'>
              {calcList.map((item, index)=>(
                <div key ={item.value} onClick ={(e)=>{setselectedCalcIndex(index); setisCalcDropdownVisible(false);}} className='overlay__dialog__elements__custom-dropdown__items-holder__dropdown-item'>
                  {item.name}
                </div>
              ))}
            </div>:null}
          </div> 
        </div>
        <div className='overlay__dialog__footer u_display_flex u_align_items '>
          <Button className='overlay__dialog__footer__confirm' isBtnDisabled = {isBtnDisabled} buttonClick={()=>{handleConfirm()}}>SUBMIT</Button>
        </div>
      </div>
      
    </div>

  )
}

Modal.prototypes = {
  handleConfirm: PropTypes.func,
  onCancel: PropTypes.func
}

Modal.defaultProps = {
  handleConfirm: () => { },
  onCancel: () => { }
}

export default Modal