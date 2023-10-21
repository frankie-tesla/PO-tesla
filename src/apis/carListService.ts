import request from "./core";
import { DriveListRes, BaseRequest, Favorite, ListData, Login, FileInfo, SearchFileReq } from "./type";
import { AxiosResponse } from "axios";
export default class CarService {
  baseUrl: string;
  constructor() {
    this.baseUrl = "/2/drive";
  }

  async getDriveList(data: BaseRequest) {
    const response: AxiosResponse<DriveListRes> = await request.post(`${this.baseUrl}/page/list`, data);
    return response.data;
  }

  async getShareList(data: Favorite) {
    const response: AxiosResponse<{ workList: { fileInfo: FileInfo }[]; totalCount: number }> = await request.post(
      "/2/cowork/page/list",
      data
    );
    return response.data;
  }

  async getFavoriteList(data: Favorite) {
    const response: AxiosResponse<{ list: ListData[]; totalCount: number }> = await request.post(
      `${this.baseUrl}/star/page/list`,
      data
    );
    return response.data;
  }

  async searchFile(data: SearchFileReq) {
    const response: AxiosResponse<{ list: ListData[]; totalCount: number }> = await request.post(
      `${this.baseUrl}/search/page/filename`,
      data
    );
    return response.data;
  }

  async Login(data: Login) {
    const response: unknown = await request.post(`/1/account/login`, data);
    return response;
  }
}
