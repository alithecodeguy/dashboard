// libraries
import { Middleware, MiddlewareAPI, isRejectedWithValue } from '@reduxjs/toolkit';

// types
import type { ErrorResponseInterface } from '../servicesCommonTypes';

export const rtkQueryErrorLogger: Middleware = (api: MiddlewareAPI) => (next) => (action) => {
  // RTK Query uses `createAsyncThunk` from redux-toolkit under the hood, so we're able to utilize these matchers!
  if (isRejectedWithValue(action)) {
    const payload = action?.payload as ErrorResponseInterface;
    if (payload?.data?.error?.description) {
      // ... do something
      // toast.error(payload.data.error.description, {
      //   toastId: payload.data.error.description,
      //   icon: <ToastErrorIcon />
      // });
    } else {
      console.log('خطایی رخ داده است.');
      console.log(action);
    }
  }

  return next(action);
};
