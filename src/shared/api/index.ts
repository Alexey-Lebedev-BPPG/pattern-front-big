/* eslint-disable default-param-last */
import { AxiosPromise } from 'axios';
import app from './api';

const baseURL = process.env.API_URL;

export const get = <T>(url: string, params = {}): AxiosPromise<T> =>
  app.get(url, params);

export const post = <T>(url: string, data = {}): AxiosPromise<T> =>
  app.post(url, data);

export const remove = <T>(url: string, params = {}): AxiosPromise<T> =>
  app.delete(url, params);

export const put = <T>(url: string, data = {}): AxiosPromise<T> =>
  app.put(url, data);

export const patch = <T>(url: string, data = {}): AxiosPromise<T> => {
  const headerForFormData =
    data instanceof FormData
      ? {
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        }
      : {};
  return app.patch(url, data, headerForFormData);
};

export const postRPC = <T>(
  params: { method: string; params?: any },
  headers?: any,
): AxiosPromise<T> =>
  app({
    baseURL,
    ...headers,
    data: params,
    method: 'post',
  });
