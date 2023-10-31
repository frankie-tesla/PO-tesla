import axios, { AxiosInstance } from "axios";
import { VITE_APP_API } from "../__mocks__/constants";

const request: AxiosInstance = axios.create({
  baseURL: VITE_APP_API,
  timeout: 240000,
  withCredentials: true,
  headers: {
    accept: "application/json"
  }
});

export default request;
