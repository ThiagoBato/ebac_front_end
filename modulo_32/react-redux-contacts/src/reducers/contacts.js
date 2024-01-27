import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [
      { id: 1, name: 'Fulano de Fulaneira', email: 'fulano@fulano.com.br', phone: '99-99999-9999' },
      { id: 2, name: 'Ciclano de Ciclaneira', email: 'ciclano@ciclano.com.br', phone: '99-99999-9999' },
      { id: 3, name: 'Mariano de Marianeira', email: 'mariano@mariano.com.br', phone: '99-99999-9999' },
    ],
  },
  reducers: {
    addContact: (state, action) => {
      action.payload.id = state.contacts.length + 1;
      state.contacts.push(action.payload);
    },
    removeContact: (state, action) => {
      state.contacts = state.contacts.filter((contact) => contact.id !== action.payload);
    },
    editContact: (state, action) => {
      const index = state.contacts.findIndex((contact) => contact.id === action.payload.id);
      if (index !== -1) {
        state.contacts[index] = action.payload;
      }
    },
  },
});

export const { addContact, removeContact, editContact } = contactsSlice.actions;
export default contactsSlice.reducer;
