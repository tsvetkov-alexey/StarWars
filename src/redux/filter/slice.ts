import { RootState } from '../store';
import { FilterSliceState } from './types';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState: FilterSliceState = {
  search: '',
  currentPage: 1,
  isFetching: true,
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setSearch(state, action: PayloadAction<string>) {
      state.search = action.payload;
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    setIsFetching(state, action: PayloadAction<boolean>) {
      state.isFetching = action.payload;
    },
  },
});

export const { setSearch, setCurrentPage, setIsFetching } = filterSlice.actions;

export const selectFilter = (state: RootState) => state.filter;

export default filterSlice.reducer;
