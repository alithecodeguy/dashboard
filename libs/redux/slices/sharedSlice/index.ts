// libraries
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

// types
import type { RootState } from '../../store';

// initial state
import { sharedSliceInitialState } from './sharedSliceInitialState';

// enums
import { ThemeEnum } from './sharedSliceEnum';

const sharedSlice = createSlice({
  name: 'shared',
  initialState: sharedSliceInitialState,
  reducers: {
    setTheme(state, action: PayloadAction<ThemeEnum>) {
      state.theme = action.payload;
    }
  }
});

// actions
export const { setTheme } = sharedSlice.actions;

// selector
export const selectTheme = (state: RootState) => state.shared.theme;

// reducer
export default sharedSlice.reducer;
