import React from 'react';

import { Section } from 'components/Section/Section';
import { AddContactsForm } from 'components/AddContactsForm/AddContactsForm';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { Filter } from 'components/Filter/Filter';
import { Wrapper } from './App.styled';

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
  // useEffect(() => {
  //   localStorage.setItem('userContacts', JSON.stringify(contacts));
  // }, [contacts]);

  return (
    <Wrapper>
      <Section title="Phonebook">
        <AddContactsForm />
      </Section>
      <Section title="Contacts">
        <Filter />
        <ContactsList />
      </Section>
    </Wrapper>
  );
};
