import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
    name: 'contacts',

    initialState: {
        contacts: [],
    },

    reducers: {
        addContact: (state, action) => {
            state.contacts.push(action.payload);
        },

        deleteContact: (state, action) => {
            state.contacts = state.contacts.filter(item => item.id !== action.payload);
        },
    },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export default contactsSlice.reducer;
