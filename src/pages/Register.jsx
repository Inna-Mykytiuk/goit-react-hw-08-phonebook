import { RegisterForm } from 'components/form/authForms/RegisterForm';
import { NavLink } from 'react-router-dom';
import { RegForm } from './Home.styles';

const Register = () => {
  return (
    <RegForm>
      <h2>Registration</h2>
      <RegisterForm />
      <p className="TextAuth">
        Already registered? <NavLink to={'/login'}>Sign in</NavLink>
      </p>
    </RegForm>
  );
};

export default Register;
