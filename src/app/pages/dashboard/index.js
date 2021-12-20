/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './index.scss';
import Sidebar from '../../components/sidebar';
import Customer from './customer';
import Appearance from './appearance';
import Comments from './comments';
import Posts from './posts';

const Dashboard = () => {
  const options = [
    {
      name: 'category',
      label: 'Category',
      hasOptions: true,
      subOptions: [
        {
          name: 'userList',
          label: 'UserList',
        },
        {
          name: 'serviceRequest',
          label: 'Service Request'
        },
        {
          name: 'contactUS',
          label: 'Contact US'
        },
        {
          name: 'feedback',
          label: 'Feedback'
        }
      ]
    },
    {
      name: 'posts',
      label: 'Posts',
      hasOptions: true,
      subOptions: [
        {
          name: 'allposts',
          label: 'All Posts'
        },
        {
          name: 'newpost',
          label: 'New Post'
        }
      ]
    },
    {
      name: 'appearance',
      label: 'Appearance',
      hasOptions: false
    },
    {
      name: 'comments',
      label: 'Comments',
      hasOptions: false
    }
  ];

  const [activeTab, setActiveTab] = useState(options[0].name);
  const [activeSubTab, setActiveSubTab] = useState(options[0].subOptions ? options[0].subOptions[0].name : '');
  const [prevActiveTab, setPrevActiveTab] = useState(options[0].name);
  const [prevActiveSubTab, setPrevActiveSubTab] = useState(options[0].subOptions ? options[0].subOptions[0] : '');

  const handleTabs = (option) => {
    if (prevActiveTab !== option.name && option.subOptions) {
      setActiveTab(prevActiveTab);
    } else if (prevActiveTab === option.name && option.subOptions) {
      handleSubTab(prevActiveSubTab, option);
      setPrevActiveTab(option.name);
    } else {
      setActiveTab(option.name);
      handleSubTab({}, option);
      setPrevActiveTab(option.name);
    }
  }

  const handleSubTab = (subOption, option) => {
    setActiveTab(option?.name);
    setPrevActiveTab(option?.name);
    if (subOption) {
      setActiveSubTab(subOption.name);
      setPrevActiveSubTab(subOption);
    }
  }

  return (
    <div className='customer__wrapper u_flex'>
      <div className='customer__sidebar'>
        <Sidebar activeSubTab={activeSubTab} options={options} onTabClick={(option) => { handleTabs(option) }}
          onSubTabClick={(subOption, option) => { handleSubTab(subOption, option) }} />
      </div>
      {activeTab === 'category' &&
        <Customer activeSubTab={activeSubTab} />
      }
      {activeTab === 'posts' &&
        <Posts activeSubTab={activeSubTab} />
      }
      {activeTab === 'appearance' &&
        <Appearance />
      }
      {activeTab === 'comments' &&
        <Comments />
      }
    </div>
  );
};

export default Dashboard;
