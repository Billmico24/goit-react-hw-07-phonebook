import { createSlice } from '@reduxjs/toolkit'
export const filterSlice = createSlice({
    name: 'filter',
    initialState: '',
    reducers: {
       filterContacts(_, action) {
      return action.payload;
    },
    }
});
export const { filterContacts } = filterSlice.actions;
export default filterSlice.reducer;
