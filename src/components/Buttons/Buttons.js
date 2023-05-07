import { Button, useColorMode } from '@chakra-ui/react';
import { MdLightMode } from 'react-icons/md';

export const BtnToggleTheme = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Button
      leftIcon={<MdLightMode />}
      colorScheme="teal"
      p="5px"
      size="xs"
      variant="outline"
      onClick={toggleColorMode}
    >
      {colorMode === 'light' ? 'Dark' : 'Light'}
    </Button>
  );
};

export const BtnSubmitAuth = ({ children }) => {
  return (
    <Button colorScheme="teal" size="sm" type="submit">
      {children}
    </Button>
  );
};
