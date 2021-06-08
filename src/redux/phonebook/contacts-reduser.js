import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
// import types from './contacts-types';
import {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsFailure,
  addContactRequest,
  addContactSuccess,
  addContactFailure,
  // deleteContact,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactFailure,
  filterContact,
  // changeFilter,
} from './contacts-actions';

const items = createReducer([], {
  [fetchContactsSuccess]: (_, { payload }) => payload,
  [addContactSuccess]: (state, { payload }) => [...state, payload],
  [deleteContactSuccess]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
});

const filter = createReducer('', {
  [filterContact]: (state, { payload }) => payload,
});

const loading = createReducer(false, {
  [fetchContactsRequest]: () => true,
  [fetchContactsSuccess]: () => false,
  [fetchContactsFailure]: () => false,
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactFailure]: () => false,
  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactFailure]: () => false,
});

export default combineReducers({
  items,
  filter,
  loading,
});
