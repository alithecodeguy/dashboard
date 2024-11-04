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
    },
    changeEditCategoryModalStatus(state, action: PayloadAction<boolean>) {
      state.editCategoryModalStatus = action.payload;
    },
    closeEditCategoryModalStatus(state) {
      state.editCategoryModalStatus = false;
    },
    openEditCategoryModalStatus(state) {
      state.editCategoryModalStatus = true;
    },
    toggleEditCategoryModalStatus(state) {
      state.editCategoryModalStatus = !state.editCategoryModalStatus;
    }
  }
});

// actions
export const {
  changeAddNewCategoryModalStatus,
  closeAddNewCategoryModalStatus,
  openAddNewCategoryModalStatus,
  toggleAddNewCategoryModalStatus,
  changeEditCategoryModalStatus,
  closeEditCategoryModalStatus,
  openEditCategoryModalStatus,
  toggleEditCategoryModalStatus
} = categoriesSlice.actions;

// selector
export const selectAddNewCategoryModalStatus = (state: RootState) =>
  state.categories.addNewCategoryModalStatus;
export const selectEditCategoryModalStatus = (state: RootState) =>
  state.categories.editCategoryModalStatus;

// reducer
export default categoriesSlice.reducer;
