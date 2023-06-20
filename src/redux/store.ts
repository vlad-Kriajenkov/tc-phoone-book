import { configureStore } from '@reduxjs/toolkit';
import contactsReduser from './contact/contact-slice';

export const store = configureStore({
  reducer: {
    contacts: contactsReduser,
  },
});


export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
