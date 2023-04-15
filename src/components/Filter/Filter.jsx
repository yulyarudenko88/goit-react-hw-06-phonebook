import React from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';

import { getFilter } from 'redux/filter/selectors';
import { setFilter } from 'redux/filter/filterSlice';

import {
  Label,
  Input,
} from 'components/AddContactsForm/AddContactsForm.styled';

export const Filter = ({ value, onChange }) => {
  const dispatch = useDispatch();
  const {filter} = useSelector(getFilter);

  const changeFilter = e => dispatch(setFilter(e.target.value));

  return (
    <>
      <Label htmlFor={nanoid()}>Find contacts by name</Label>
      <Input
        type="text"
        name="filter"
        value={filter}
        onChange={changeFilter}
        id={nanoid()}
      />
    </>
  );
};
