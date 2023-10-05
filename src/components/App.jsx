import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { MainTitle } from './ContactForm/ContactForm.styled';
import { Title } from './ContactList/ContactList.styled';

export const App = () => {
  return (
    <div>
      <MainTitle>Phonebook</MainTitle>
      <ContactForm />

      <Title>Contacts</Title>
      <Filter />
      <ContactList />
    </div>
  );
};
