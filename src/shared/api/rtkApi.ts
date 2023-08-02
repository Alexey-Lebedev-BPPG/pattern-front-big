import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';

const apiUrl = process.env.API_URL;
const baseQuery = fetchBaseQuery({
  baseUrl: apiUrl,
  credentials: 'include',
  prepareHeaders: headers => {
    headers.set('Content-Type', 'application/json');
    headers.set('Accept', 'application/json, text/plain, */*');
    return headers;
  },
});

const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  const result = await baseQuery(args, api, extraOptions);
  const { dispatch } = api;
  if (result.error?.status === 401) {
    const typeConnect = localStorage.getItem('typeConnect');
    dispatch({ type: 'USER_LOGOUT' });
    localStorage.clear();
    await baseQuery('auth/exit', api, extraOptions);
    localStorage.setItem('typeConnect', typeConnect || '');
  }
  return result;
};

export const rtkApi = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: builder => ({}),
  reducerPath: 'rtkApi',
});
