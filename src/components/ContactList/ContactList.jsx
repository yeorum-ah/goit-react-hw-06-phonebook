import { ContactsList, NumList, DeleteBtn } from './ContactList.styled';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'Redux/contactsSlice';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.filter);
  const filteredContacts = contacts.filter(contact => {
    console.log(contact);
    return contact.name.toLowerCase().includes(filter.toLowerCase());
  });

  return (
    <ContactsList>
      {filteredContacts.map(({ name, number, id }) => (
        <li key={id}>
          {name}: <NumList>{number}</NumList>
          <DeleteBtn onClick={() => dispatch(deleteContact(id))}>
            Delete
          </DeleteBtn>
        </li>
      ))}
    </ContactsList>
  );
};
