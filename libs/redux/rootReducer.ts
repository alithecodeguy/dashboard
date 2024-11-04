// libraries
import { combineReducers } from 'redux';

// slices
import sharedSliceReducer from './slices/sharedSlice';
import categoriesSliceReducer from './slices/categoriesSlice';

// rtk-query
import { coreApi } from './rtkQuery/coreApi';

const rootReducer = combineReducers({
  shared: sharedSliceReducer,
  categories: categoriesSliceReducer,
  [coreApi.reducerPath]: coreApi.reducer
});

export default rootReducer;
