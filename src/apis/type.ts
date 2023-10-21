export type BaseRequest = {
  parentId?: string | null;
  fileType?: string;
  recursive?: boolean;
  path?: string | null;
  fileStatus?: "NORMAL" | "HIDDEN" | "ALL";
  keyword?: string;
} & Favorite;

export type Favorite = {
  page: number;
  count: number;
  sort: "TIME" | "NAME";
  desc: boolean;
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

type DirectoryInfo = {
  fileId: string;
  fileName: string;
  lastRevision: number;
  lastModified: number;
  fileType: string;
  parentId: null | number;
  size: number;
  hide: boolean;
  path: string;
  taskId: null | number;
  lastModifiedRevision: number;
  fileRevision: number;
  pageCount: number;
  editable: boolean;
  referenceId: null | number;
  shared: boolean;
  starred: boolean;
  starredTime: number;
  weblinkCreated: boolean;
  deletedTime: number;
  lastAccessTime: number;
  pinUp: boolean;
  teamFile: boolean;
  userid: string;
};
export type DriveListRes = {
  list: ListData[];
  directoryInfo: DirectoryInfo;
  totalCount: number;
};

export type UserInfo = {
  level: 1 | 4 | 8 | 9 | 12 | 13 | undefined;
  fullName: string;
  email: string;
};
export type AiUserInfo = {
  userinfo: {
    credit: number | null;
    remainCredit: number;
  };
};

export type ListData = {
  fileId: string;
  fileName: string;
  lastModified: number;
  fileType: string;
  parentId: string;
  size: number;
  referenceId: null | number;
};

export type FileInfo = {
  id: string;
  name: string;
  size: number;
  lastModified: number;
  countWebview: number;
  countComments: number;
  ownerId: string;
  ownerName: string;
  revision: number;
  revisionFile: number;
  path: string;
  parentId: string;
  fileType: string;
};

export type SearchFileReq = {
  keyword: string;
  parentId: string;
  fileType: "FILE" | "DIR" | "ALL";
  menuType: "DRIVE" | "SHARE" | "STAR";
} & Favorite;

export type DriveLocation = { fileId: string; fileName: string };
