import axios from "axios";
import { logout } from "../store/actions";

const axiosConfig = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}/api`,
});

// Add a request interceptor
axiosConfig.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosConfig.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

const checkException = (exception) => {
  const code = exception?.response.status;
  if (code == 401 || code == 403) {
    // logout()
  }
};
export default axiosConfig;
