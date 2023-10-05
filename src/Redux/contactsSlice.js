import { nanoid } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

const contactInitialState = { contacts: [] };

const contactSlice = createSlice({
  name: 'contacts',
  initialState: contactInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        const { id, name, number } = action.payload;
        state.contacts.push({ id, name, number });
      },
      prepare(name) {
        return {
          payload: {
            id: nanoid(),
            name: name.name,
            number: name.number,
          },
        };
      },
    },
    deleteContact(state, action) {
      const updatedContacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
      state.contacts = updatedContacts;
    },
  },
});

export const { addContact, deleteContact } = contactSlice.actions;
export const contactsReducer = contactSlice.reducer;
