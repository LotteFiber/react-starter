import axios from 'axios';
import { redirect } from 'react-router';

import { PATHS } from '@/routes/path';
import { API_BASE_URL, TIMEOUT } from '@/constants/appConfig';

// Create the instance
const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: TIMEOUT,
});

// Add a request interceptor
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('accessToken');

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// Optional: Add a response interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle 401, refresh token, logout, etc.
    if (error.response?.status === 401) {
      redirect(PATHS.signIn);
    }

    return Promise.reject(error);
  },
);

export default api;
