import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import ContactList from '../components/ContactList/ContactList';
import ContactForm from '../components/ContactForm/ContactForm';
import Filter from '../components/Filter/Filter';
import oper from '../redux/phonebook/contacts-operations';
import { getLoading } from '../redux/phonebook/contacts-selectors';
// import shortid from 'shortid';

class App extends Component {
  
  componentDidMount() {
        this.props.fetchContacts();
  }
  

  render() {
        return (
      <>
				<ContactForm />
					
        <ContactList/>

        <Filter />
      </>
    );
  }
}

const mapStateToProps = state => ({
   isLoadingContacts: getLoading(state),
});

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(oper.fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
// export default App;
