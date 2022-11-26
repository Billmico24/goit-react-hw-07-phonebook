import { configureStore } from '@reduxjs/toolkit';
import {contactsReducers} from './contactsSlice';
import filterSlice from './filterSlice';


export const store = configureStore({
    reducer: {
        contacts: contactsReducers,
        filter: filterSlice
    }
});
