import { RootState } from '../store';
import { Character } from './types';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface CharacterState {
  characters: Character[];
}

const initialState: CharacterState = {
  characters: [],
};

const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    setCharacters(state, action: PayloadAction<Character[]>) {
      state.characters = action.payload;
    },
  },
});

export const { setCharacters } = charactersSlice.actions;

export const selectCharacters = (state: RootState) => state.characters;

export default charactersSlice.reducer;
