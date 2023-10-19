type BaseRequest = {
  parentId?: string;
  fileType?: string;
  recursive?: boolean;
  path?: string;
  fileStatus: "NORMAL" | "HIDDEN" | "ALL";
  page: number;
  count: number;
  sort: "TIME" | "NAME";
  desc: boolean;
  keyword?: string;
};
type RequireAtLeastOne<T, Keys extends keyof T> = Pick<T, Exclude<keyof T, Keys>> &
  {
    [K in Keys]-?: Required<Pick<T, K>> & Partial<Pick<T, Exclude<Keys, K>>>;
  }[Keys];

export type DriveRequest = RequireAtLeastOne<BaseRequest, "parentId" | "path">;

export type Login = {
  autoLogin: boolean;
  email: string;
  password: string;
};
