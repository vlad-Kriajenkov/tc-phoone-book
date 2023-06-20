import axios from 'axios';

import { IAddContact, IDataPromis, IPatchContact } from '../../interfaces/interface';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://647c337cc0bae2880ad075c5.mockapi.io';

export const addContact = createAsyncThunk(
  'contact/add',
  async (contact: IAddContact): Promise<IDataPromis> => {
    try {
      const { data } = await axios.post('/contacts', contact);
      return data;
    } catch (error) {
      throw error;
    }
  }
);

export const getContacts = createAsyncThunk(
  'contact/getAll',
  async (): Promise<IDataPromis[]> => {
    try {
      const { data } = await axios.get('/contacts');

      return data;
    } catch (error) {
      throw error;
    }
  }
);

export const contactOne = createAsyncThunk(
  'contact/getOne',
  async (id: string): Promise<IDataPromis> => {
    try {
      const { data } = await axios.get(`/contacts/${id}`);
      return data;
    } catch (error) {
      throw error;
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contact/deleteContact',
  async (id: string): Promise<IDataPromis> => {
    try {
      const { data } = await axios.delete(`/contacts/${id}`);
      return data;
    } catch (error) {
      throw error;
    }
  }
);

export const patchContact = createAsyncThunk(
  'contact/patchContact',
  async (contact: IPatchContact): Promise<IDataPromis> => {
    try {
      const { data } = await axios.patch(`/contacts/${contact.id}`, contact);
      console.log(data);

      return data;
    } catch (error) {
      throw error;
    }
  }
);
