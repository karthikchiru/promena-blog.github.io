import React from 'react';
import Name from '../../../../../components/name';
import CommonTable from '../../../../../components/commonTable';

const UserList = () => {
  return (
    <div>
      <Name tabTitle='Customer' title='UserList' />
      <CommonTable />
    </div>
  )
}
UserList.propTypes = {
};

UserList.defaultProps = {
}

export default React.memo(UserList);
