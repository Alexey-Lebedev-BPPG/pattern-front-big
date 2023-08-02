import axios from 'axios';
import { showSnackbar } from '../ui/Snackbars/Snackbars';

let count = 0;

const api = process.env.API_URL;

const app = axios.create({
  baseURL: api,
  headers: {
    Accept: 'application/json, text/plain, text/event-stream, */*',
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

app.interceptors.request.use(
  async config => config,
  error => Promise.reject(error),
);

app.interceptors.response.use(
  config => config,
  async error => {
    if (error.response.status === 401 && count < 2) {
      count++;
      const typeConnect = localStorage.getItem('typeConnect');
      if (count < 2) showSnackbar('Your session has expired', 'success');
      await axios
        .post(`${api}auth/exit`, { withCredentials: true })
        .then(res => {
          localStorage.clear();
          sessionStorage.clear();
          sessionStorage.removeItem('persist:root');
          localStorage.removeItem('persist:root');
          localStorage.setItem('typeConnect', typeConnect || '');
        });
    }
    return Promise.reject(error);
  },
);

export default app;
