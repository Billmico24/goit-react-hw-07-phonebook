import { createSlice, nanoid } from '@reduxjs/toolkit'

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState:  [
            { id: nanoid(5), name: 'Лунная Роза', number: '071-0-232' },
            { id: nanoid(5), name: 'Hermione Kline', number: '645-17-19' },
            { id: nanoid(5), name: 'Eden Clements', number: '443-89-12' },
            { id: nanoid(5), name: 'Annie Copeland', number: '459-12-56' }],
        
    
    reducers: {
        addContact(state, action) {
            state.push(action.payload)
        },
        removeContact(state, action) {
            return state.filter(el => el.id !== action.payload);
        },
    }
});

export const { addContact, removeContact } = contactsSlice.actions;
export default contactsSlice.reducer;

// selector
export const getContacts = state => state.contacts.contacts;
