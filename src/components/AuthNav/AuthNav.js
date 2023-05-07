import { Navlink } from './AuthNav.styled';

const AuthNav = () => {
  return (
    <div>
      <Navlink to="/register">Register</Navlink>
      <Navlink to="/login">Log In</Navlink>
    </div>
  );
};

export default AuthNav;
