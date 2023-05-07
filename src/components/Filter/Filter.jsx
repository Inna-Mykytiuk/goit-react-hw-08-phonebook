import { Label } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { filteredContacts } from 'redux/contacts/contactsSlice';
import { Input } from '@chakra-ui/react';
import { Label } from '../Style/Style.styled';

const Filter = () => {
  const dispatch = useDispatch();

  return (
    <Label>
      Find contact by name
      <Input
        size="xs"
        variant="filled"
        borderRadius="8px"
        focusBorderColor="teal.500"
        type="text"
        placeholder="Enter name"
        onChange={e => dispatch(filteredContacts(e.target.value))}
      />
    </Label>
  );
};

export default Filter;
