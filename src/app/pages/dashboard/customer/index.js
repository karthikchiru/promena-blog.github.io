import React from 'react';
import './index.scss';
import Service from './pages/service-request';
import Users from './pages/users';
import ContactUs from './pages/contact-us';
import Feedback from './pages/feedback';
import PropTypes from 'prop-types';

const Customer = ({ activeSubTab }) => {
    return (
        <div className='u_width'>
            <div className='u_page'>
                {activeSubTab === 'serviceRequest' &&
                    <Service />
                }
                {activeSubTab === 'userList' &&
                    <Users />
                }
                {activeSubTab === 'contactUS' &&
                    <ContactUs />
                }
                {activeSubTab === 'feedback' &&
                    <Feedback />
                }
            </div>
        </div>
    );
};

Customer.propTypes = {
    activeSubTab: PropTypes.string
};

Customer.defaultProps = {
    activeSubTab: ''
}

export default React.memo(Customer);
