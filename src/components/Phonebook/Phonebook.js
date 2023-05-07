import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/operations';
import { Button, Input } from '@chakra-ui/react';
import { BsPersonFillAdd } from 'react-icons/bs';
import { FormAddContact, Label } from './Phonebook.styled';

const Phonebook = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const name = e.target.name.value;
    const number = e.target.number.value;
    const checkName = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (checkName) {
      alert(`${name} is already in contacts`);
      e.target.reset();
      return;
    }
    dispatch(addContact({ name, number }));
    e.target.reset();
  };

  return (
    <FormAddContact onSubmit={handleSubmit}>
      <Label>
        Name
        <Input
          size="xs"
          variant="filled"
          borderRadius="8px"
          focusBorderColor="teal.500"
          type="text"
          name="name"
          placeholder="Enter name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>
      <Label>
        Number
        <Input
          size="xs"
          variant="filled"
          borderRadius="8px"
          focusBorderColor="teal.500"
          type="tel"
          name="number"
          placeholder="Enter phone number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>
      <Button
        leftIcon={<BsPersonFillAdd />}
        colorScheme="teal"
        size="xs"
        m="0 auto"
        type="submit"
      >
        Add contact
      </Button>
    </FormAddContact>
  );
};

export default Phonebook;
