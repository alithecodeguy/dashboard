// libraries
import { combineReducers } from 'redux';

// slices
import sharedSliceReducer from './slices/sharedSlice';
import categoriesSliceReducer from './slices/categoriesSlice';
import ordersSliceReducer from './slices/ordersSlice';
import foodsSliceReducer from './slices/foodsSlice';

// rtk-query
import { coreApi } from './rtkQuery/coreApi';

const rootReducer = combineReducers({
  shared: sharedSliceReducer,
  categories: categoriesSliceReducer,
  orders: ordersSliceReducer,
  foods: foodsSliceReducer,
  [coreApi.reducerPath]: coreApi.reducer
});

export default rootReducer;
