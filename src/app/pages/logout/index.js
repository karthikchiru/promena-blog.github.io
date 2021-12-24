import Confirm from 'app/components/confirmModal/confirm';
import React, {useState} from 'react';
import { useHistory } from 'react-router';
import './index.scss';

const Logout = () => {
    const history = useHistory();
    const [confirmLogOut, setconfirmLogOut] = useState(false);
    const [alertText, setAlertText] = useState('');

    const handleLogout = ()=>{
        setconfirmLogOut(true);
        setAlertText('Are you sure want to Logout ?');
    }
    const onConfirm = ()=>{
        setconfirmLogOut(false);
        history.push('/');
    }
    return (
        <div>
<i className='fa fa-sign-out' onClick={handleLogout} aria-hidden='true'></i>
{confirmLogOut &&  <Confirm buttonText={'OK'} isCancelRequired={true} confirmTitle={alertText}
            onConfirm={onConfirm} onCancel={() => { setconfirmLogOut(false) }} />}
</div>
    )
}

export default Logout;
