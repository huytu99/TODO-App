import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'https://reqres.in/api',
  headers: {
    'content-type': 'application/json',
    Accept: 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin': '*',
  },
});
axiosClient.interceptors.request.use(async config => {
  // Handle token here ...
  return config;
});
axiosClient.interceptors.response.use(
  response => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  error => {
    // Handle errors
    throw error;
  },
);
export default axiosClient;
