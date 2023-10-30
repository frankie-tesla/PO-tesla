export interface ILogMessage {
  ti: {
    v: string;
    t: string;
  };
  ui: {
    ua: string;
    ip: string;
    us?: string | undefined;
    uid?: string | undefined;
    ul?: string | undefined;
  };
  obj: {
    dc: string;
    dp: string;
    dt: string;
    ec: string | null;
    ea: string | null;
    el: string | null;
  };
  ctx: {
    ts: number;
    aid?: string;
    bid: string;
    sid: string;
    tid: string;
    svc: string;
    nos: boolean;
  };
  cobj: {
    env: string;
  };
}
