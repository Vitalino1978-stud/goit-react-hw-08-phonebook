import React from 'react'
import { connect } from 'react-redux';
import * as actions from '../../redux/phonebook/contacts-actions';
import contactsSelectors from '../../redux/phonebook/contacts-selectors';
import './Filter.css'

const Filter = ({valueState, filterByName}) => {
  return (
    <label className="label" >
			<input type="text"
				value={valueState}
				onChange={filterByName} />
      
    </label>
  )
}

const mapStateToProps = state => ({ valueState: contactsSelectors.getFilter(state) });

const mapDispatchToProps = dispatch => ({ filterByName: event => dispatch(actions.filterContact(event.target.value))});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);