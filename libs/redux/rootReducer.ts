// libraries
import { combineReducers } from 'redux';

// slices
import sharedSliceReducer from './slices/sharedSlice';

// rtk-query
import { coreApi } from './rtkQuery/coreApi';

const rootReducer = combineReducers({
  shared: sharedSliceReducer,
  [coreApi.reducerPath]: coreApi.reducer
});

export default rootReducer;
