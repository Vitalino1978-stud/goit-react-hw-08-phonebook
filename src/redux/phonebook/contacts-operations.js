import axios from 'axios';
import {
  addContactRequest,
  addContactSuccess,
  addContactFailure,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactFailure,
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsFailure,
} from './contacts-actions';
axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const fetchContacts = () => async dispatch => {
  dispatch(fetchContactsRequest());

  try {
    const { data } = await axios.get('/contacts');
    console.log(data);
    dispatch(fetchContactsSuccess(data));
  } catch (error) {
    dispatch(fetchContactsFailure(error));
  }
};

const addContact = values => dispatch => {
  const contact = {
    name: values.name,
    number: values.number,
  };

  dispatch(addContactRequest());
  axios
    .post('/contacts', contact)
    .then(({ data }) => dispatch(addContactSuccess(data)))
    .catch(error => dispatch(addContactFailure(error)));
};

const deleteContact = contactId => dispatch => {
  dispatch(deleteContactRequest());
  axios
    .delete(`/contacts/${contactId}`)
    .then(() => dispatch(deleteContactSuccess(contactId)))
    .catch(error => dispatch(deleteContactFailure(error)));
};

export default {
  fetchContacts,
  addContact,
  deleteContact,
};
