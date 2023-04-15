import { FiUser } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';

import { getContacts } from 'redux/contacts/selectors';
import { getFilter } from 'redux/filter/selectors';
import { deleteContact } from 'redux/contacts/contactsSlice';

import { Contact } from './ContactsList.styled';

export const ContactsList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const {filter} = useSelector(getFilter);
  
  const handleDeleteContact = contactId => dispatch(deleteContact(contactId));

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
    return (
    <ul>
      {visibleContacts.map(({ id, name, number }) => (
        <Contact key={id}>
          <FiUser />
          {name}: {number}
          <button type="button" onClick={()=>handleDeleteContact(id)}>
            Delete
          </button>
        </Contact>
      ))}
    </ul>
  );
};