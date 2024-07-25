import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filters',
  initialState: {
    name: '',
  },
  reducers: {
    changeFilter(state, action) {
      state.name = action.payload;
    },
  },
});

export const selectValueInput = state => state.filters.name;
export default filterSlice.reducer;
export const { changeFilter } = filterSlice.actions;
