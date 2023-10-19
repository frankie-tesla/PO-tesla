import request from "./core";
import { DriveRequest, Login } from "./type";

export default class CarService {
  baseUrl: string;
  constructor() {
    this.baseUrl = "/1/drive/car";
  }

  async getDriveList(data: DriveRequest) {
    const response: unknown = await request.post(`${this.baseUrl}/list`, data);
    return response;
  }

  async getShareList(data: DriveRequest) {
    const response: unknown = await request.post(`${this.baseUrl}/cowork/list`, data);
    return response;
  }

  async getFavoriteList(data: DriveRequest) {
    const response: unknown = await request.post(`${this.baseUrl}/star/list`, data);
    return response;
  }

  async Login(data: Login) {
    const response: unknown = await request.post(`/1/account/login`, data);
    return response;
  }
}
