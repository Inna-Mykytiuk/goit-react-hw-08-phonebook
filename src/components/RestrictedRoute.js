import { Navigate } from 'react-router-dom';
import useAuth from './hooks/useAuth';
import PropTypes from 'prop-types';

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};

RestrictedRoute.propTypes = {
  children: PropTypes.element,
  restricted: PropTypes.bool,
  redirectTo: PropTypes.string,
};
