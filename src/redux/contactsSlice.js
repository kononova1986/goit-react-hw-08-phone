import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const info = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: info,
  },

  reducers: {
    addContact(state, action) {
      state.items.push(action.payload);
    },
    prepare() {
      return { payload: { name: '', number: '', id: nanoid() } };
    },
    deleteContact(state, action) {
      const index = state.items.findIndex(
        contact => contact.id === action.payload
      );
      state.items.splice(index, 1);
    },
  },
});

export default contactSlice.reducer;
export const { addContact, deleteContact } = contactSlice.actions;
