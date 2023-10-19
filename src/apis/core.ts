import axios, { AxiosInstance } from "axios";

const request: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_API,
  timeout: 240000,
  withCredentials: true,
  headers: {
    accept: "application/json"
  }
});

export default request;
