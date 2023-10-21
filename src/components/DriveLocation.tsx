import styled from "@emotion/styled";

import { DriveLocation as DriveLocationType, BaseRequest } from "../apis/type.ts";
type Props = {
  docLocations: Doctype[];
  setDriveRequestData: (data: BaseRequest) => void;
  driveRequestData: BaseRequest;
  setDocLocations: (folder: DriveLocationType[]) => void;
};
type Doctype = {
  fileId: string;
  fileName: string;
};

const DriveLocation = ({ docLocations, driveRequestData, setDriveRequestData, setDocLocations }: Props) => {
  const url = `${import.meta.env.VITE_APP_URL}/web/maxage1/common/img/location_bg.svg`;
  const onClick = (fileId: string) => {
    setDriveRequestData({
      ...driveRequestData,
      parentId: fileId
    });
    const docLocationIdx = docLocations.findIndex((value) => value.fileId === fileId);

    setDocLocations(docLocations.slice(0, docLocationIdx + 1));
  };

  const onRoot = () => {
    setDriveRequestData({
      ...driveRequestData,
      page: 1,
      path: "PATH://drive/",
      fileStatus: "NORMAL",
      sort: "TIME",
      desc: true,
      parentId: null
    });
    setDocLocations([]);
  };
  return (
    <Wrapper className="folder_tree">
      <LiStyle onClick={onRoot}>My PolarisDrive</LiStyle>
      {docLocations.map(({ fileId, fileName }) => {
        return (
          <LiStyle key={fileId} onClick={() => onClick(fileId)}>
            <img src={url} alt="next" />
            {fileName}
          </LiStyle>
        );
      })}
    </Wrapper>
  );
};

export default DriveLocation;

export const Wrapper = styled.ul`
  width: 100%;
  height: 54px;
  font-size: 14px;
  display: flex;
  align-items: center;
  border-top: 1px solid #dcdcdc;
  & li {
    position: relative;
    padding-left: 30px;
    display: inline-block;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    &:last-of-type:not(:first-of-type) {
      color: #1e82ff;
      font-weight: 700;
    }
    &:first-of-type {
      background: 0 0;
    }
  }
  color: #787878;
  & img {
    position: absolute;
    left: 12px;
    top: 6px;
  }
`;

export const LiStyle = styled.li`
  position: static;
`;
