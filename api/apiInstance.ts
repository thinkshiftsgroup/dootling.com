import axios from "axios";

const API_BASE_URL = "https://api.dootling.com";

const apiInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiInstance;
