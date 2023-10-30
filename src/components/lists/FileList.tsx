import styled from "@emotion/styled";
import { convertUnixDate } from "../../utils/date.ts";
import { getSize } from "../../utils/size.ts";
import Nodoc from "../Nodoc.tsx";
import Skeleton from "../Skeleton.tsx";
import { ForwardedRef, forwardRef } from "react";
import { getLogData } from "../../utils/log.ts";
import { base62 } from "../../utils/base62.ts";
import { BaseRequest } from "../../apis/type.ts";
import { ListData } from "../../apis/type.ts";
import { UlStyle } from "./ListSubject.tsx";
import useLog from "../../hooks/useLog.tsx";
import { useDocumentLocationTypeContext } from "../../context/DocumentLocationTypeContext.tsx";
import { ILogMessage } from "../../interfaces/log.ts";
import { useCookies } from "react-cookie";

type FolderTree = {
  fileId: string;
  fileName: string;
};
type Props = {
  isLoading: boolean;
  datas: ListData[] | undefined;
  driveRequestData: BaseRequest;
  setDriveRequestData: (data: BaseRequest) => void;
  docLocations: FolderTree[];
  setDocLocations: (folder: FolderTree[]) => void;
};
const FileListSkeleton = () => {
  return (
    <UlStyle className="skeleton">
      <li className="form">
        <Skeleton width={24} height={30} />
      </li>
      <li className="name">
        <Skeleton width={200} height={30} />
      </li>
      <li className="modify">
        <Skeleton width={100} height={30} />
      </li>
      <li className="size">
        <Skeleton width={50} height={30} />
      </li>
    </UlStyle>
  );
};

const FileList = (
  { isLoading, datas, driveRequestData, setDriveRequestData, docLocations, setDocLocations }: Props,
  ref: ForwardedRef<HTMLDivElement>
) => {
  const { type } = useDocumentLocationTypeContext();
  const { setLog } = useLog();
  const [cookies] = useCookies();

  if (isLoading) {
    return (
      <List id="list" ref={ref}>
        {Array.from({ length: 10 }).map((_, i) => (
          <FileListSkeleton key={i} />
        ))}
      </List>
    );
  }

  if (!datas || datas.length === 0) {
    return <Nodoc type={type} />;
  }

  const handleClick = (type: string, fileId: string, fileName: string) => {
    const extArr = fileName.split(".");
    const logData: ILogMessage = getLogData(
      cookies.AID,
      cookies.BID,
      cookies.SID,
      cookies.TID,
      "vehiclemode",
      extArr[extArr.length - 1].toUpperCase(),
      "cl",
      "ux"
    );
    setLog(logData);

    if (type === "DIR") {
      setDriveRequestData({
        ...driveRequestData,
        path: null,
        parentId: fileId
      });
      setDocLocations([
        ...docLocations,
        {
          fileName,
          fileId
        }
      ]);
    } else {
      location.href = "/d/" + base62.encode(Number(fileId)) + "?tesla=true";
    }
  };

  return (
    <List id="list" ref={ref}>
      {datas?.map((data) => {
        const fileExts = data.fileName.split(".");
        const fileImg = data.fileType === "DIR" ? "/cloud/folder" : `/v4/${fileExts[fileExts.length - 1]}`;
        return (
          <UlStyle key={data.fileId} onClick={() => handleClick(data.fileType, data.fileId, data.fileName)}>
            <li className="form">
              <img
                className="ext_img"
                src={`${import.meta.env.VITE_APP_URL}/web/maxage1/common/img${fileImg}.svg`}
                alt="ext"
              />
            </li>
            <li className="name">
              <div className="tit">{data.fileName}</div>
            </li>
            <li className="modify">{convertUnixDate(data.lastModified)}</li>
            <li className="size">{data.fileType === "DIR" ? "" : getSize(data.size)}</li>
          </UlStyle>
        );
      })}
    </List>
  );
};

export default forwardRef<HTMLDivElement, Props>(FileList);

const List = styled.div`
  width: 100%;
  box-sizing: unset;
  height: calc(100vh - 255px); //헤더, 페이지네이션 값, 폴더정보, 테이블 헤더 높이 제외
  overflow-y: scroll;
  & .skeleton {
    & span {
      margin-top: 10px;
    }
  }
  &::-webkit-scrollbar {
    display: none;
  }
  ul {
    border-top: none;
    box-sizing: unset;
    cursor: pointer;
  }

  li.form {
    position: relative;
    border-bottom: none;
  }

  li.name {
    width: 90%;
    border-bottom: 1px solid #e6e6e6;

    .tit {
      position: relative;
      overflow: hidden;
      display: inline-block;
      width: 48%;
      height: 48px;
      line-height: 48px;
      white-space: pre;
      text-overflow: ellipsis;
      font-size: 14px !important;
      color: #2f3133;
    }
  }

  li.modify {
    position: absolute;
    display: inline-block;
    text-align: left;
    border-left: none !important;
    border-right: none !important;
    border-bottom: 1px solid #e6e6e6;
    color: #2f3133;
    text-indent: 23px;
  }

  li.size {
    border-bottom: 1px solid #e6e6e6;
  }
`;
