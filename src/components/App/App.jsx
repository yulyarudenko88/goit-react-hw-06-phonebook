import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Section } from 'components/Section/Section';
import { AddContactsForm } from 'components/AddContactsForm/AddContactsForm';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { Filter } from 'components/Filter/Filter';
import { Wrapper } from './App.styled';

import { getContacts } from 'redux/contacts/selectors';
import { getFilter } from 'redux/filter/selectors';
import { deleteContact } from 'redux/contacts/contactsSlice';
import { setFilter } from 'redux/filter/filterSlice';

// const parseContacts =
//   JSON.parse(localStorage.getItem('userContacts')) === null
//     ? [
//         { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//         { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//         { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//         { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//       ]
//     : JSON.parse(localStorage.getItem('userContacts'));

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const {filter} = useSelector(getFilter);
  

  // useEffect(() => {
  //   localStorage.setItem('userContacts', JSON.stringify(contacts));
  // }, [contacts]);

  const handleDeleteContact = contactId => dispatch(deleteContact(contactId));

  const changeFilter = e => dispatch(setFilter(e.target.value));

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <Wrapper>
      <Section title="Phonebook">
        <AddContactsForm />
      </Section>
      <Section title="Contacts">
        <Filter value={filter} onChange={changeFilter} />
        <ContactsList
          contacts={visibleContacts}
          onDeleteContact={handleDeleteContact}
        />
      </Section>
    </Wrapper>
  );
};
