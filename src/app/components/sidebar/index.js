import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './index.scss';
import { useHistory } from 'react-router-dom';
import Confirm from '../confirmModal/confirm';

const Sidebar = ({ options, onTabClick, onSubTabClick, activeSubTab }) => {
  // eslint-disable-next-line no-unused-vars
  const history = useHistory();
  const [isActiveTab, setIsActiveTab] = useState(0);
  const [isActiveSubTab, setIsActiveSubTab] = useState(0);
  const [isShowModal, setIsShowModal] = useState(false);
  const [isShowConfirm, setIsShowConfirm] = useState(false);
  const [isShowSubTabs, setIsShowSubTabs] = useState(true);
  const [prevActiveTab, setPrevActiveTab] = useState(0);

  const handleCalls = (i, option) => {
    if (i === isActiveTab) {
      setIsShowSubTabs(!isShowSubTabs);
    } else {
      setIsShowSubTabs(true);
    }
    setIsActiveTab(i);
    setPrevActiveTab(i);
    onTabClick(option);
    setIsActiveSubTab(null);
    setIsShowModal(false);
  }

  const handleSubCalls = (i, subOption, option) => {
    setIsActiveSubTab(i);
    onSubTabClick(subOption, option);
  }

  const handleLogout = () => {
        history.push('/');
  }

  const handleCancel = () => {
    setIsShowConfirm(false);
    setIsShowModal(false);
    setIsActiveTab(prevActiveTab);
  }

  return (
    <div className='sidebar'>
      <div className='sidebar__content sidebar__mr1'>
        {options.map((option, i) => {
          return (
            <div key={i}>
              <div className={(i === isActiveTab && !option.subOptions) ? 'sidebar__tab sidebar__activeTab' : 'sidebar__tab'} key={i}
                onClick={() => { handleCalls(i, option) }}>
                <p className='sidebar__text sidebar__width8'> {option.label} </p>
                {option.hasOptions ?
                  <div className='sidebar__arrow-box'>
                    {i === isActiveTab && isShowSubTabs ?
                      <span className='sidebar__arrow sidebar__up-arrow'></span>
                      :
                      <span className='sidebar__arrow sidebar__down-arrow'></span>
                    }
                  </div>
                  : null
                }
              </div>
              {option.subOptions && option.subOptions.length && i === isActiveTab && isShowSubTabs ?
                <div className='sidebar__content'>
                  {option.subOptions.map((subOption, i) => {
                    return (
                      <div className={(i === isActiveSubTab || subOption.name === activeSubTab) ? 'sidebar__tab sidebar__pad2 sidebar__activeTab' : 'sidebar__tab sidebar__pad2'} key={i}
                        onClick={() => { handleSubCalls(i, subOption, option) }}>
                        <p className='sidebar__text'> {subOption.label} </p>
                      </div >
                    )
                  })
                  }
                </div > : null
              }
            </div>
          )
        })
        }
      </div >

      <div className='sidebar__content sidebar__mr15'>
        <div className={isShowModal ? 'sidebar__tab sidebar__activeTab sidebar__none' : 'sidebar__tab sidebar__none'}
          onClick={() => { setIsShowSubTabs(false); setIsShowModal(true); setIsShowConfirm(true); setIsActiveTab(null) }}>
          <p className='sidebar__text sidebar__width8'> Logout </p>
          {/* <div className='sidebar__arrow-box'>
            {isShowModal ?
              <span className='sidebar__arrow sidebar__up-arrow'></span>
              :
              <span className='sidebar__arrow sidebar__down-arrow'></span>
            }
          </div> */}
        </div >
        {isShowModal ?
          //  <div className='sidebar__content' >
          //   <div className='sidebar__tab sidebar__activeTab sidebar__pad2' onClick={() => { setIsShowConfirm(true) }}>
          //     <p className='sidebar__text u_cursor_pointer'> Logout </p>
          //   </div>
          (
            isShowConfirm ?
              <Confirm onCancel={() => { handleCancel() }} onConfirm={() => { handleLogout() }}
                confirmTitle={'Are you sure you want to logout?'} buttonText={'OK'}
              />
              : null
          )
          : null
        }
      </div >

    </div >
  );
};

Sidebar.propTypes = {
  options: PropTypes.array,
  onTabClick: PropTypes.func,
  onSubTabClick: PropTypes.func,
  activeSubTab: PropTypes.string
};

Sidebar.defaultProps = {
  options: [],
  onTabClick: () => { },
  onSubTabClick: () => { },
  activeSubTab: ''
};

export default React.memo(Sidebar);