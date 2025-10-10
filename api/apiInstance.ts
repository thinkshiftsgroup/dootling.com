import axios from "axios";
import Cookies from "js-cookie";

const API_BASE_URL = "http://api.dootling.com";
const apiInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

apiInstance.interceptors.request.use(
  (config) => {
    const token = Cookies.get("dootling_auth_token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default apiInstance;
