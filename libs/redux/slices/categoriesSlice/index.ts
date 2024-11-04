// libraries
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

// types
import type { RootState } from '../../store';

// initial state
import { categoriesSliceInitialState } from './categoriesSliceInitialState';

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: categoriesSliceInitialState,
  reducers: {
    changeAddNewCategoryModalStatus(state, action: PayloadAction<boolean>) {
      state.addNewCategoryModalStatus = action.payload;
    },
    closeAddNewCategoryModalStatus(state) {
      state.addNewCategoryModalStatus = false;
    },
    openAddNewCategoryModalStatus(state) {
      state.addNewCategoryModalStatus = true;
    },
    toggleAddNewCategoryModalStatus(state) {
      state.addNewCategoryModalStatus = !state.addNewCategoryModalStatus;
    }
  }
});

// actions
export const {
  changeAddNewCategoryModalStatus,
  closeAddNewCategoryModalStatus,
  openAddNewCategoryModalStatus,
  toggleAddNewCategoryModalStatus
} = categoriesSlice.actions;

// selector
export const selectAddNewCategoryModalStatus = (state: RootState) =>
  state.categories.addNewCategoryModalStatus;

// reducer
export default categoriesSlice.reducer;
