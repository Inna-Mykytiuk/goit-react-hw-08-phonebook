import { LoginForm } from 'components/form/authForms/LoginForm';
import { NavLink } from 'react-router-dom';

const Login = () => {
  return (
    <div>
      <h2>Log In</h2>
      <LoginForm />
      <p className="TextAuth">
        Don't have an account? <NavLink to="/register">Sign up</NavLink>
      </p>
    </div>
  );
};

export default Login;
