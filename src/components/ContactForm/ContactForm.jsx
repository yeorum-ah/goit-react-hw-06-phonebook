import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  SubmitForm,
  ErrorMsg,
  FormField,
  Styledlabel,
  SubmitBtn,
} from './ContactForm.styled';
import { addContact } from 'Redux/contactsSlice';
import { useDispatch, useSelector } from 'react-redux';

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .matches(
      "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    )
    .required('Required'),
  number: Yup.string()
    .min(5, 'Too Short!')
    .max(50, 'Too Long!')
    .matches(
      /\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required('Required'),
});

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);
  return (
    <>
      <div>
        <Formik
          initialValues={{
            name: '',
            number: '',
          }}
          validationSchema={SignupSchema}
          onSubmit={(values, action) => {
            if (
              contacts.some(
                contact =>
                  contact.name.toLowerCase() === values.name.toLowerCase()
              )
            ) {
              alert(`${values.name} is already in contacts`);
              return;
            } else {
              dispatch(addContact(values));
              action.resetForm();
            }
          }}
        >
          <SubmitForm>
            <Styledlabel htmlFor="name">Name</Styledlabel>
            <FormField id="name" name="name" placeholder="Draco" />
            <ErrorMsg component="span" name="name" />

            <Styledlabel htmlFor="number">Number</Styledlabel>
            <FormField
              id="number"
              name="number"
              type="tel"
              placeholder="123-45-67"
            />
            <ErrorMsg component="span" name="number" />
            <SubmitBtn type="submit">Submit</SubmitBtn>
          </SubmitForm>
        </Formik>
      </div>
    </>
  );
};
