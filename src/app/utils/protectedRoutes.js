/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, path, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        props ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/home ', state: { from: props.location } }} />
        )
      }
    />
  );
};

export default ProtectedRoute;
