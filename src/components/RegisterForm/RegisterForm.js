import {
  Input,
  Button,
  InputGroup,
  InputRightElement,
  FormLabel,
} from '@chakra-ui/react';
import { BtnSubmitAuth } from 'components/Buttons/Buttons';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperation';
import { Form } from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <FormLabel>
        Username
        <Input
          w="320px"
          size="sm"
          variant="filled"
          borderRadius="8px"
          focusBorderColor="teal.500"
          type="text"
          name="name"
          placeholder="Enter name"
        />
      </FormLabel>
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
      <BtnSubmitAuth>Register</BtnSubmitAuth>
    </Form>
  );
};
