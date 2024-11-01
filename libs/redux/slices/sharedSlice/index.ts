// libraries
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

// types
import type { RootState } from '../../store';

// initial state
import { sharedSliceInitialState } from './sharedSliceInitialState';

const sharedSlice = createSlice({
  name: 'shared',
  initialState: sharedSliceInitialState,
  reducers: {
    // actions to change sider status
    closeSider(state) {
      state.isSiderCollapsed = true;
    },
    openSider(state) {
      state.isSiderCollapsed = false;
    },
    changeSiderStatus(state, action: PayloadAction<boolean>) {
      state.isSiderCollapsed = action.payload;
    },
    toggleSiderStatus(state) {
      state.isSiderCollapsed = !state.isSiderCollapsed;
    },
    // actions to change drawer status
    closeDrawer(state) {
      state.isDrawerClosed = true;
    },
    openDrawer(state) {
      state.isDrawerClosed = false;
    },
    changeDrawerStatus(state, action: PayloadAction<boolean>) {
      state.isDrawerClosed = action.payload;
    },
    toggleDrawerStatus(state) {
      state.isDrawerClosed = !state.isDrawerClosed;
    },
    // action to set the current path
    setCurrentPath(state, action: PayloadAction<string>) {
      state.currentPath = [action.payload];
    }
  }
});

// actions
export const {
  closeSider,
  openSider,
  changeSiderStatus,
  toggleSiderStatus,
  closeDrawer,
  openDrawer,
  changeDrawerStatus,
  toggleDrawerStatus,
  setCurrentPath
} = sharedSlice.actions;

// selector
export const selectSiderStatus = (state: RootState) => state.shared.isSiderCollapsed;
export const selectDrawerStatus = (state: RootState) => state.shared.isDrawerClosed;
export const selectCurrentPath = (state: RootState) => state.shared.currentPath;

// reducer
export default sharedSlice.reducer;
