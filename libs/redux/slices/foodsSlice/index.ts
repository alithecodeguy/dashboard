// libraries
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

// types
import type { RootState } from '../../store';

// initial state
import { foodsSliceInitialState } from './foodsSliceInitialState';

const foodsSlice = createSlice({
  name: 'foods',
  initialState: foodsSliceInitialState,
  reducers: {
    // foodExtrasDrawerStatus
    changeFoodExtrasDrawer(state, action: PayloadAction<boolean>) {
      state.foodExtrasDrawerStatus = action.payload;
    },
    closeFoodExtrasDrawer(state) {
      state.foodExtrasDrawerStatus = false;
    },
    openFoodExtrasDrawer(state) {
      state.foodExtrasDrawerStatus = true;
    },
    toggleFoodExtrasDrawerStatus(state) {
      state.foodExtrasDrawerStatus = !state.foodExtrasDrawerStatus;
    },

    changeEditFoodDrawerStatus(state, action: PayloadAction<boolean>) {
      state.editFoodDrawerStatus = action.payload;
    },
    closeEditFoodDrawer(state) {
      state.editFoodDrawerStatus = false;
    },
    openEditFoodDrawer(state) {
      state.editFoodDrawerStatus = true;
    },
    toggleEditFoodDrawerStatus(state) {
      state.editFoodDrawerStatus = !state.editFoodDrawerStatus;
    },
    changeEditableFoodId(state, action: PayloadAction<number>) {
      state.editableFoodId = action.payload;
    },
    clearEditableFoodId(state) {
      state.editableFoodId = undefined;
    },

    changeAddNewFoodDrawer(state, action: PayloadAction<boolean>) {
      state.addNewFoodDrawerStatus = action.payload;
    },
    closeAddNewFoodDrawer(state) {
      state.addNewFoodDrawerStatus = false;
    },
    openAddNewFoodDrawer(state) {
      state.addNewFoodDrawerStatus = true;
    },
    toggleAddNewFoodDrawerStatus(state) {
      state.addNewFoodDrawerStatus = !state.addNewFoodDrawerStatus;
    }
  }
});

// actions
export const {
  changeFoodExtrasDrawer,
  closeFoodExtrasDrawer,
  openFoodExtrasDrawer,
  toggleFoodExtrasDrawerStatus,
  changeEditFoodDrawerStatus,
  closeEditFoodDrawer,
  openEditFoodDrawer,
  toggleEditFoodDrawerStatus,
  changeEditableFoodId,
  clearEditableFoodId,
  changeAddNewFoodDrawer,
  closeAddNewFoodDrawer,
  openAddNewFoodDrawer,
  toggleAddNewFoodDrawerStatus
} = foodsSlice.actions;

// selector
export const selectFoodExtrasDrawerStatus = (state: RootState) =>
  state.foods.foodExtrasDrawerStatus;

export const selectEditFoodDrawerStatus = (state: RootState) => state.foods.editFoodDrawerStatus;

export const selectEditableFoodId = (state: RootState) => state.foods.editableFoodId;

export const selectAddNewFoodDrawerStatus = (state: RootState) =>
  state.foods.addNewFoodDrawerStatus;

// reducer
export default foodsSlice.reducer;
