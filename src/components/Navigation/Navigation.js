import useAuth from 'components/hooks/useAuth';
import { BtnToggleTheme } from 'components/Buttons/Buttons';
import { Navlink } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <Navlink to="/">Home</Navlink>
      {isLoggedIn && <Navlink to="/contacts">Contacts</Navlink>}
      <BtnToggleTheme />
    </nav>
  );
};
