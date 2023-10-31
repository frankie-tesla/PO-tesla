import { ILogMessage } from "../interfaces/log.ts";
import UserService from "../apis/userService.ts";
export function getLogData(
  aid: string,
  bid: string,
  sid: string,
  tid: string,
  dp: string,
  dt: string,
  ec: string | null,
  ea: string | null
) {
  const userService = new UserService();
  const getSimpleUserInfo = userService.getSimpleUserInfo();

  const logData: ILogMessage = {
    ti: {
      v: "1.1",
      t: "page"
    },
    ui: {
      ua: window.navigator.userAgent,
      ip: "0.0.0.0"
    },
    obj: {
      dc: Math.floor(Math.random() * 10000000000000000).toString(),
      dp: dp,
      dt: dt,
      ec: ec,
      ea: ea,
      el: null
    },
    ctx: {
      ts: parseInt(new Date().getTime().toString().substring(0, 10)),
      aid: aid,
      bid: bid,
      sid: sid,
      tid: tid,
      svc: location.href.indexOf("polarisoffice.kr") !== -1 ? "kt" : "global",
      nos: true
    },
    cobj: {
      env: "vf"
    }
  };

  getSimpleUserInfo.then((data) => {
    logData.ui.us = data?.status;
    logData.ui.uid = data?.userId;
    logData.ui.ul = data?.level?.toString();
  });

  return logData;
}
