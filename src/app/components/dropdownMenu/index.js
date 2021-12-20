/* eslint-disable react/react-in-jsx-scope */
import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import './index.scss';

const DropdownMenu = ({ menuOption, onClickOutSide, className, onOptionClick }) => {

  const dropdownMenuRef = useRef(null)

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownMenuRef.current && !dropdownMenuRef.current.contains(event.target)) {
        onClickOutSide();
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dropdownMenuRef]);

  return (
    <div className={`dropdownmenu ${className}`} ref={dropdownMenuRef}>
      <p className='cursor-pointer dropdownmenu__close' onClick={() => onClickOutSide()}>x</p>
      {menuOption.map((item, index) => (
        <div key={index} onClick={() => onOptionClick(item)}>
          <div className='dropdownmenu__option' onClick={item.click}>
            <p className='dropdownmenu__option__item'>{item.name}</p>
          </div>
        </div>
      ))
      }
    </div>
  );
};

DropdownMenu.propTypes = {
  menuOption: PropTypes.array,
  onClickOutSide: PropTypes.func,
  className: PropTypes.string,
  onOptionClick: PropTypes.func
}
DropdownMenu.defaultProps = {
  menuOption: [],
  onClickOutSide: () => { },
  onOptionClick: () => { },
  className: ''
}


export default DropdownMenu;
