import { RootState } from '../store';
import { CharactersResponse } from './types';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface CharacterState {
  charactersData: CharactersResponse | null;
  allCharactersArr: CharactersResponse | null;
}

const initialState: CharacterState = {
  charactersData: null,
  allCharactersArr: null,
};

const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    setCharacters(state, action: PayloadAction<CharactersResponse>) {
      state.charactersData = action.payload;
    },
    setAllCharactersArr(state, action: PayloadAction<CharactersResponse>) {
      state.allCharactersArr = action.payload;
    },
  },
});

export const { setCharacters, setAllCharactersArr } = charactersSlice.actions;

export const selectCharacters = (state: RootState) => state.characters;

export default charactersSlice.reducer;
