import { createSlice } from '@reduxjs/toolkit';

import { IContactStateProps } from '../../interfaces/interface';
import {
  addContact,
  deleteContact,
  getContacts,
  contactOne,
  patchContact,
} from './contact-operation';
const initialState = {
  contacts: [],
  filter: '',
  contactPatch: {
    createdAt: '',
    id: '',
    name: '',
    phone: '',
  },
} as IContactStateProps;

const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {},
  extraReducers: builder => {
    //! Add
    builder.addCase(addContact.fulfilled, (state, { payload }) => {
      state.contacts = [...state.contacts, payload];
    });
    //! GET
    builder.addCase(getContacts.fulfilled, (state, { payload }) => {
      state.contacts = payload;
    });
    //! Delete
    builder.addCase(deleteContact.fulfilled, (state, { payload }) => {
      state.contacts = state.contacts.filter(({ id }) => id !== payload.id);
    });
    //! contactOne
    builder.addCase(contactOne.fulfilled, (state, { payload }) => {
      state.contactPatch = payload;
    });
    //! Patch
    builder.addCase(patchContact.fulfilled, (state, {payload})=>{
      
    })
  },
});

export default contactSlice.reducer;
