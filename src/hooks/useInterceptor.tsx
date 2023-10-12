import { useEffect } from "react";
import { AxiosError, InternalAxiosRequestConfig, AxiosResponse } from "axios";
import request from "../apis/core";
import cookie from "../utils/cookie";

const useInterceptor = () => {
  const onRequest = async (config: InternalAxiosRequestConfig): Promise<InternalAxiosRequestConfig> => {
    const XInfraBid = cookie.getCookie("BID");
    if (XInfraBid) {
      config.headers["X-INFR_BID"] = XInfraBid;
    }
    return config;
  };

  const onErrorResponse = (error: AxiosError | Error): Promise<AxiosError> => {
    console.error(error);
    return Promise.reject(error);
  };

  const requestInterceptor = request.interceptors.request.use(onRequest, onErrorResponse);

  const responseInterceptor = request.interceptors.response.use(
    (response: AxiosResponse) => {
      const XInfraBid = response.request.headers["X-INFR_BID"];
      if (XInfraBid) {
        // if (XInfraBid != cookie.getCookie('BID')) {
        //   const popupMessage = new Array();
        //   popupMessage[0] = LanguagePack.POPUP_EXPIRED_SESSION;
        //   const popup = new PopupMessage(PopupType.DEFAULT, ButtonType.CONFIRM, LanguagePack.KEYWORD_CONFIRM, {
        //     popupMessage: popupMessage
        //   }, logout, logout, logout);
        //   popup.create();
        //   popup.show();
        //   return;
        // }
      }
      return response.data;
    },
    (error: Error) => Promise.reject(error)
  );

  useEffect(() => {
    return () => {
      request.interceptors.request.eject(requestInterceptor);
      request.interceptors.response.eject(responseInterceptor);
    };
  }, [requestInterceptor, responseInterceptor]);
};

export default useInterceptor;
