// libraries
import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

// reducers
import rootReducer from './rootReducer';

// middlewares
import { rtkQueryErrorLogger } from './rtkQuery/middlewares/rtkQueryErrorLogger';

// rtk-query
import { coreApi } from './rtkQuery/coreApi';

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(coreApi.middleware).concat(rtkQueryErrorLogger),
  devTools: process.env.NODE_ENV !== 'production'
});
setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
