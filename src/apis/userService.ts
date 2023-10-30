import request from "./core";
import { AiUserInfo, UserInfo } from "./type";
import { AxiosResponse } from "axios";
export default class UserService {
  async getUserInfo() {
    const response: AxiosResponse<UserInfo> = await request.post(`/1/account/userinfo`, {
      socialProvider: true
    });
    return response.data;
  }

  async getAIUserInfo() {
    const response: AxiosResponse<AiUserInfo> = await request.post("/1/ai/userinfo");
    return response.data;
  }

  async getSimpleUserInfo() {
    const response: AxiosResponse<UserInfo & { resultCode: number; status: string; userId: string }> =
      await request.post(`/2/account/userinfo/simple`);
    return response.data;
  }
}
