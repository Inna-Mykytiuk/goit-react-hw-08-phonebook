import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authOperations';
import {
  Button,
  Input,
  InputGroup,
  InputRightElement,
  FormLabel,
} from '@chakra-ui/react';
import { useState } from 'react';
import { Form } from './LoginForm.styled';
import { BtnSubmitAuth } from 'components/Buttons/Buttons';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <FormLabel>
        Email
        <Input
          w="320px"
          size="sm"
          variant="filled"
          borderRadius="8px"
          focusBorderColor="teal.500"
          type="email"
          name="email"
          placeholder="Enter email"
        />
      </FormLabel>
      <FormLabel>
        Password
        <InputGroup>
          <Input
            w="320px"
            size="sm"
            variant="filled"
            borderRadius="8px"
            focusBorderColor="teal.500"
            type={show ? 'text' : 'password'}
            name="password"
            placeholder="Enter password"
          />
          <InputRightElement
            h="16px"
            top="50%"
            transform="translateY(-50%)"
            right="3px"
          >
            <Button
              h="1.5rem"
              colorScheme="teal"
              size="sm"
              onClick={handleClick}
            >
              {show ? 'Hide' : 'Show'}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormLabel>
      <BtnSubmitAuth>Log In</BtnSubmitAuth>
    </Form>
  );
};
