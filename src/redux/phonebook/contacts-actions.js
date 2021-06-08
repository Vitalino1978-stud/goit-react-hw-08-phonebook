// import types from './contacts-types';

import { createAction } from '@reduxjs/toolkit';
// import shortid from 'shortid';

export const fetchContactsRequest = createAction(
  'contacts/fetchContactsRequest',
);
export const fetchContactsSuccess = createAction(
  'contacts/fetchContactsSuccess',
);
export const fetchContactsFailure = createAction('contacts/fetchContactsError');

export const addContactRequest = createAction('contacts/addContactRequest');
export const addContactSuccess = createAction('contacts/addContactSuccess');
export const addContactFailure = createAction('contacts/addContactError');

// export const delContactRequest = createAction('contacts/delContactRequest');
// export const delContactSuccess = createAction('contacts/delContactSuccess');
// export const delContactFailure = createAction('contacts/delContactError');

export const deleteContactRequest = createAction(
  'contacts/deleteContactRequest',
);
export const deleteContactSuccess = createAction(
  'contacts/deleteContactSuccess',
);
export const deleteContactFailure = createAction('contacts/deleteContactError');

// export const deleteContact = createAction('contacts/delete');

// const deleteContact = contactId => ({
//   type: types.delete,
//   payload: contactId,
// });.

export const filterContact = createAction('contacts/changeFilter');

// const filterContact = value => ({
//   type: types.filter,
//   payload: value,
// });

// export default {
//   addContactRequest,
//   addContactSuccess,
//   addContactFailure,
//   deleteContact,
//   filterContact,
// };

// contacts: prevState.contacts.filter(contact => contactId !== contact.id),
