// libraries
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

// types
import type { RootState } from '../../store';

// initial state
import { ordersSliceInitialState } from './ordersSliceInitialState';

const ordersSlice = createSlice({
  name: 'orders',
  initialState: ordersSliceInitialState,
  reducers: {
    changeOrderDetailsDrawer(state, action: PayloadAction<boolean>) {
      state.orderDetailsDrawerStatus = action.payload;
    },
    closeOrderDetailsDrawer(state) {
      state.orderDetailsDrawerStatus = false;
    },
    openOrderDetailsDrawer(state) {
      state.orderDetailsDrawerStatus = true;
    },
    toggleOrderDetailsDrawerStatus(state) {
      state.orderDetailsDrawerStatus = !state.orderDetailsDrawerStatus;
    }
  }
});

// actions
export const {
  changeOrderDetailsDrawer,
  closeOrderDetailsDrawer,
  openOrderDetailsDrawer,
  toggleOrderDetailsDrawerStatus
} = ordersSlice.actions;

// selector
export const selectOrderDetailsDrawerStatus = (state: RootState) =>
  state.orders.orderDetailsDrawerStatus;

// reducer
export default ordersSlice.reducer;
