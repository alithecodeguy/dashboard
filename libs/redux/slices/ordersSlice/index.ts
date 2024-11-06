// libraries
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

// types
import type { RootState } from '../../store';

// initial state
import { ordersSliceInitialState } from './ordersSliceInitialState';

// enums
import { OrderDetailsDrawerTypeEnum } from './ordersSliceEnum';

const ordersSlice = createSlice({
  name: 'orders',
  initialState: ordersSliceInitialState,
  reducers: {
    // orderDetailsDrawerStatus
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
    },
    // orderDetailsDrawerType
    toggleOrderDetailsDrawerType(state) {
      if (state.orderDetailsDrawerType === OrderDetailsDrawerTypeEnum.DELIVERY) {
        state.orderDetailsDrawerType = OrderDetailsDrawerTypeEnum.DETAILS;
      } else {
        state.orderDetailsDrawerType = OrderDetailsDrawerTypeEnum.DELIVERY;
      }
    }
  }
});

// actions
export const {
  changeOrderDetailsDrawer,
  closeOrderDetailsDrawer,
  openOrderDetailsDrawer,
  toggleOrderDetailsDrawerStatus,
  toggleOrderDetailsDrawerType
} = ordersSlice.actions;

// selector
export const selectOrderDetailsDrawerStatus = (state: RootState) =>
  state.orders.orderDetailsDrawerStatus;

export const selectToggleOrderDetailsDrawerType = (state: RootState) =>
  state.orders.orderDetailsDrawerType;

// reducer
export default ordersSlice.reducer;
