import { RootState } from '../store';
import { FilterSliceState } from './types';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState: FilterSliceState = {
  search: '',
  currentPage: 1,
  isFetching: true,
  allGenders: true,
  male: true,
  female: true,
  notAvailableGender: true,
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

    // Редьюсеры для фильтрации
    setAllGenders(state, action: PayloadAction<boolean>) {
      state.allGenders = action.payload;
    },
    setMale(state, action: PayloadAction<boolean>) {
      state.male = action.payload;
    },
    setFemale(state, action: PayloadAction<boolean>) {
      state.female = action.payload;
    },
    setNotAvailableGender(state, action: PayloadAction<boolean>) {
      state.notAvailableGender = action.payload;
    },
  },
});

export const {
  setSearch,
  setCurrentPage,
  setIsFetching,
  setAllGenders,
  setMale,
  setFemale,
  setNotAvailableGender,
} = filterSlice.actions;

export const selectFilter = (state: RootState) => state.filter;

export default filterSlice.reducer;
