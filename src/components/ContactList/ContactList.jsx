import React from 'react';
import { connect } from 'react-redux';
import contactsOperations from '../../redux/phonebook/contacts-operations';
import contactsSelectors from '../../redux/phonebook/contacts-selectors';

// import { contactsOperations, contactsSelectors} from '../../redux/phonebook'
import css from './ContactList.module.css';

const ContactList = ({contacts, deleteContact}) => (
  <ul className={css.contactList}>
          {contacts.map(contact => 
						<li key={contact.id } className={css.contactListItem} >
              <p>{contact.name}</p>
              <p>{contact.number}</p>
              <button type="button" onClick={() => deleteContact(contact.id)}>Delete contact</button>
            </li>)
          }
          
        
</ul>
)

// const getVisibleContacts = (allContacts, filterContact) => {
//   const normalizedFilter = filterContact.toLowerCase();

//   return allContacts.filter(({ name }) =>
//     name.toLowerCase().includes(normalizedFilter),
//   );
// };

const mapStateToProps = (state) => {
  return {
    contacts: contactsSelectors.getVisibleContacts(state),
  };
};

// const mapStateToProps = (state) => ({ contacts: state.contacts.items })
const mapDispatchToProps = dispatch => ({ deleteContact: id => dispatch(contactsOperations.deleteContact(id)),});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
