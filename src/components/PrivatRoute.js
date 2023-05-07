import { Navigate } from 'react-router-dom';
import useAuth from './hooks/useAuth';
import PropTypes from 'prop-types';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn, isRefreshing } = useAuth();
  const shouldRedirect = !isLoggedIn && !isRefreshing;
  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};

PrivateRoute.propTypes = {
  children: PropTypes.element,
  restricted: PropTypes.bool,
  redirectTo: PropTypes.string,
};
