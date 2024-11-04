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
    changeAddNewCategoryDrawerStatus(state, action: PayloadAction<boolean>) {
      state.addNewCategoryDrawerStatus = action.payload;
    },
    closeAddNewCategoryDrawerStatus(state) {
      state.addNewCategoryDrawerStatus = false;
    },
    openAddNewCategoryDrawerStatus(state) {
      state.addNewCategoryDrawerStatus = true;
    },
    toggleAddNewCategoryDrawerStatus(state) {
      state.addNewCategoryDrawerStatus = !state.addNewCategoryDrawerStatus;
    },
    changeEditCategoryDrawerStatus(state, action: PayloadAction<boolean>) {
      state.editCategoryDrawerStatus = action.payload;
    },
    closeEditCategoryDrawerStatus(state) {
      state.editCategoryDrawerStatus = false;
    },
    openEditCategoryDrawerStatus(state) {
      state.editCategoryDrawerStatus = true;
    },
    toggleEditCategoryDrawerStatus(state) {
      state.editCategoryDrawerStatus = !state.editCategoryDrawerStatus;
    }
  }
});

// actions
export const {
  changeAddNewCategoryDrawerStatus,
  closeAddNewCategoryDrawerStatus,
  openAddNewCategoryDrawerStatus,
  toggleAddNewCategoryDrawerStatus,
  changeEditCategoryDrawerStatus,
  closeEditCategoryDrawerStatus,
  openEditCategoryDrawerStatus,
  toggleEditCategoryDrawerStatus
} = categoriesSlice.actions;

// selector
export const selectAddNewCategoryDrawerStatus = (state: RootState) =>
  state.categories.addNewCategoryDrawerStatus;
export const selectEditCategoryDrawerStatus = (state: RootState) =>
  state.categories.editCategoryDrawerStatus;

// reducer
export default categoriesSlice.reducer;
