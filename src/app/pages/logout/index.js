import Confirm from 'app/components/confirmModal/confirm';
import React, {useState} from 'react';
import { useHistory } from 'react-router';
import Tippy from '@tippyjs/react'
// import ReactTooltip from 'react-tooltip';
// import IconButton from "@material-ui/core/IconButton";
// import Tooltip from "@material-ui/core/Tooltip";
// import PersonIcon from "@material-ui/icons/Person";
// import DeleteIcon from "@material-ui/icons/Delete";
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
        <Tippy  className='tippy' content='LogOut'>
 
<i className='fa fa-sign-out' onClick={handleLogout} aria-hidden='true'></i>
</Tippy>
{confirmLogOut &&  <Confirm buttonText={'OK'} isCancelRequired={true} confirmTitle={alertText}
            onConfirm={onConfirm} onCancel={() => { setconfirmLogOut(false) }} />}

</div>

    )
}

export default Logout;
