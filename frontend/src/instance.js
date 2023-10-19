import axios from 'axios';

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // Replace with your API base URL
  headers: {
    'Content-Type': 'multipart/form-data'
  }
});

instance.interceptors.request.use(config => {
  // Add the required data to the request
  config.data = {
    ...config.data,
    key: import.meta.env.VITE_AUTH_KEY
  };
  return config;
});

export default instance;