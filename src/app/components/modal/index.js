import PropTypes from 'prop-types';
import './index.scss';

export default function Modal(props) {
  const { children, onClickOutSide } = props;

  const handleClick = e => {
    if (e?.target.id === 'dialog-target') {
      onClickOutSide();
    }
    return;
  }

  return (
    <div className='backdrop' id='dialog-target' onClick={handleClick}>
      <div className='backdrop__modal'>
        {children}
      </div>
      {/* <div className='backdrop__arrow-left'></div> */}
    </div>
  );
}

Modal.propTypes = {
  children: PropTypes.element.isRequired,
  onClickOutSide: PropTypes.func
};

Modal.defaultProps = {
  onClickOutSide: () => { }
};
