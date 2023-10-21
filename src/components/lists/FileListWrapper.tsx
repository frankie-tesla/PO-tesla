import styled from "@emotion/styled";
import { ForwardedRef, forwardRef, useState } from "react";
import Pagenation from "./Pagenation";
import FileList from "./FileList";
import { BaseRequest, DriveLocation } from "../../apis/type";
import { ListData } from "../../apis/type";
import ListSubject from "./ListSubject";
import ListFolderLocationWrapper from "./ListFolderLocationWrapper";
type Props = {
  totalPage: number;
  page: number;
  setPage: (page: number) => void;
  isLoading: boolean;
  datas: ListData[] | undefined;
  setDriveRequestData: (data: BaseRequest) => void;
  driveRequestData: BaseRequest;
};
const FileListWrapper = (
  { totalPage, page, setPage, isLoading, setDriveRequestData, driveRequestData, datas }: Props,
  ref: ForwardedRef<HTMLDivElement>
) => {
  const [docLocations, setDocLocations] = useState<DriveLocation[]>([]);

  return (
    <Wrapper>
      <ListFolderLocationWrapper
        docLocations={docLocations}
        setDocLocations={setDocLocations}
        setDriveRequestData={setDriveRequestData}
        driveRequestData={driveRequestData}
      />
      <ListSubject setDriveRequestData={setDriveRequestData} driveRequestData={driveRequestData} />
      <FileList
        setDriveRequestData={setDriveRequestData}
        driveRequestData={driveRequestData}
        datas={datas}
        ref={ref}
        isLoading={isLoading}
        docLocations={docLocations}
        setDocLocations={setDocLocations}
      />
      <Pagenation totalPage={totalPage} page={page} setPage={setPage} limit={5} />
    </Wrapper>
  );
};

export default forwardRef<HTMLDivElement, Props>(FileListWrapper);

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: unset;

  & .folder_tree {
    border-top: 1px solid #dcdcdc;
    border-bottom: none;

    &li {
      position: static !important;
    }
  }

  & .logo_img {
    width: 182px;
    margin-right: 3rem;
  }

  & .tb_header {
    border-top: 1px solid #dcdcdc;
  }
`;
