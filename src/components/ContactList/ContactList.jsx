import { useDispatch, useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/contacts/selectors';
import { deleteContact } from 'redux/contacts/operations';
import { FaTrashAlt } from 'react-icons/fa';
import { Button, ListItem, List, ItemWrapper } from './ContactList.styled';

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  return (
    <List>
      {contacts.map(({ id, name, number }) => (
        <ListItem key={id}>
          <ItemWrapper>
            <p>{name}: </p>
            <p>{number}</p>
          </ItemWrapper>
          <Button type="button" onClick={() => dispatch(deleteContact(id))}>
            <FaTrashAlt />
          </Button>
        </ListItem>
      ))}
    </List>
  );
};

export default ContactList;
