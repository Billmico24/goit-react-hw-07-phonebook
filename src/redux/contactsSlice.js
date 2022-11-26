import { createSlice } from '@reduxjs/toolkit'
// import * as contactsActions from './contactsActions';
import { addContact, fetchContacts, deleteContact } from './contactsOperations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const handleFulfilled = state => {
  state.isLoading = false;
  state.error = null;
};

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        items: [],
        isLoading: false,
        error: null
        
    },
    extraReducers: {
    [fetchContacts.pending]: handlePending,
    [fetchContacts.fulfilled](state, action) {
      handleFulfilled(state, action);
      state.items = action.payload;
    },

    [fetchContacts.rejected]: handleRejected,
    [addContact.pending]: handlePending,
    [addContact.fulfilled](state, action) {
      handleFulfilled(state, action);
      state.items.push(action.payload);
    },

    [addContact.rejected]: handleRejected,
    [deleteContact.pending]: handlePending,
    [deleteContact.fulfilled](state, action) {
      handleFulfilled(state, action);

      const index = state.items.findIndex(
        contact => contact.id === action.payload.id
      );
      state.items.splice(index, 1);
    },
    }
});



export const contactsReducers = contactsSlice.reducer;
