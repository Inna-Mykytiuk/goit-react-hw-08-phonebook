import useAuth from 'components/hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authOperation';
import { Wrapper, UserName } from './UserMenu.styled';
import { Button } from '@chakra-ui/react';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Wrapper>
      <UserName>Welcome, {user.name}</UserName>
      <Button
        colorScheme="teal"
        p="5px"
        size="xs"
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </Button>
    </Wrapper>
  );
};
