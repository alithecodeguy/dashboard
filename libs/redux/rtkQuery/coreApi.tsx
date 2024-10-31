// libraries
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// types
import type { BaseQueryFn } from '@reduxjs/toolkit/query';

// configs
import { routes } from '@/configs/routes';
import { notification } from 'antd';

let retryCount = 0;

const baseQuery: BaseQueryFn = async (args, api, extraOptions) => {
  const result = await fetchBaseQuery({
    baseUrl: '/backend'
  })(args, api, extraOptions);

  // if (result.error && result.error.status === 401) {
  //   window.location.replace(`${window.location.origin}${routes.BFF_LOGIN}`);
  // }

  // if (result.error && result.error.status === 403) {
  //   if (retryCount < 1) {
  //     retryCount++;
  //     return await baseQuery(args, api, extraOptions); // Retry the API call
  //   } else {
  //     window.location.replace(`${window.location.origin}${routes.BFF_LOGIN}`);
  //   }
  // }

  if (result.error && result.error.status === 413) {
    notification.error({
      message: 'پیغام خطا',
      description: 'حجم فایل بشتر از 2 مگ است',
      placement: 'bottomRight'
    });
  }

  // to many request
  if (result.error && result.meta?.response?.status === 429) {
    console.log('too many request! chill dude!');
    // ... do something
  }
  retryCount--;
  return result;
};

export const coreApi = createApi({
  baseQuery,
  tagTypes: ['asset'],
  endpoints: () => ({})
});
