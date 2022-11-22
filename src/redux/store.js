import { configureStore } from '@reduxjs/toolkit'
import contactsSlice from 'redux/contactsSlice';
import filterSlice from './filterSlice';



export default configureStore({
    reducer: {
        contacts: contactsSlice,
        filter: filterSlice
    }
});