import { createSelector, createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContacts, deleteContacts } from './contactsOps';
import { selectValueInput } from './filtersSlice';

const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    loading: false,
    error: false,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, state => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(fetchContacts.rejected, state => {
        state.loading = false;
        state.error = true;
      })
      .addCase(addContacts.pending, state => {
        state.loading = true;
        state.error = false;
      })
      .addCase(addContacts.fulfilled, (state, action) => {
        state.items.push(action.payload);
        state.loading = false;
      })
      .addCase(addContacts.rejected, state => {
        state.loading = false;
        state.error = true;
      })
      .addCase(deleteContacts.pending, state => {
        state.loading = true;
        state.error = false;
      })
      .addCase(deleteContacts.fulfilled, (state, action) => {
        state.items = state.items.filter(
          contact => contact.id !== action.payload.id
        );
        state.loading = false;
      })
      .addCase(deleteContacts.rejected, state => {
        state.loading = false;
        state.error = true;
      });
  },
});

export const selectLoading = state => state.contacts.loading;
export const selectError = state => state.contacts.error;
export const selectItem = state => state.contacts.items;

export const selectVisibleContact = createSelector(
  [selectItem, selectValueInput],
  (contacts, filterContact) => {
    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filterContact.toLowerCase());
    });
  }
);

export default contactSlice.reducer;
