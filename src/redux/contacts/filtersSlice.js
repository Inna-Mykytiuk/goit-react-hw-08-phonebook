import { createSlice } from '@reduxjs/toolkit';

const initialStateFilters = { filter: '' };

const filtersSlice = createSlice({
  name: 'filters',
  initialState: initialStateFilters,
  reducers: {
    setFilterContacts: {
      reducer(state, action) {
        state.filter = action.payload;
      },
    },
  },
});

export const { setFilterContacts } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
