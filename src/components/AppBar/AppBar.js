import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import AuthNav from 'components/AuthNav/AuthNav';
import useAuth from 'components/hooks/useAuth';
import { Header } from './AppBar.styled';

const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Header>
  );
};

export default AppBar;
