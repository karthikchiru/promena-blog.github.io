/* eslint-disable no-unused-vars */
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, path, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        localStorage.getItem('token') ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/', state: { from: props.location } }} />
        )
      }
    />
  );
};

export default ProtectedRoute;
