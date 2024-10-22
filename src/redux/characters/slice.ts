import { RootState } from '../store';
import { CharactersResponse } from './types';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface CharacterState {
  charactersData: CharactersResponse | null;
}

const initialState: CharacterState = {
  charactersData: null,
};

const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    setCharacters(state, action: PayloadAction<CharactersResponse>) {
      state.charactersData = action.payload;
    },
  },
});

export const { setCharacters } = charactersSlice.actions;

export const selectCharacters = (state: RootState) => state.characters;

export default charactersSlice.reducer;
