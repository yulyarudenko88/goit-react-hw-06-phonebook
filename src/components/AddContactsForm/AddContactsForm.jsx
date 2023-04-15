import React, { useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { useSelector, useDispatch } from 'react-redux';

import { Form, Label, Input } from './AddContactsForm.styled';
import { Button } from 'components/Button/Button';

import { addContact } from 'redux/contacts/contactsSlice';
import { getContacts } from 'redux/contacts/selectors';

export const AddContactsForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    
    const isExistName = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
  
    if (isExistName) {
      alert(`${name} is already in contacts list!`);
    } else {
      dispatch(addContact(name, number));
    }

    formReset();
  };

  const formReset = () => {
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label htmlFor={nanoid()}>Name</Label>
      <Input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={name}
        onChange={handleChange}
        id={nanoid()}
      />

      <Label htmlFor={nanoid()}>Number</Label>
      <Input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        value={number}
        onChange={handleChange}
        id={nanoid()}
      />
      <Button type="submit">Add contact</Button>
    </Form>
  );
};

