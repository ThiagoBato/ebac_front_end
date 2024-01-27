import { createAction } from '@reduxjs/toolkit';

export const addContact = createAction('contacts/addContact');
export const removeContact = createAction('contacts/removeContact');
export const editContact = createAction('contacts/editContact');
