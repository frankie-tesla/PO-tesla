import styled from "styled-components";
import { listData } from "../dummy/dummy.ts";
import { convertUnixDate } from "../utils/date.ts";
import { getSize } from "../utils/size.ts";

const FileList = () => {
  return (
    <List>
      {listData.list.map((data) => {
        const fileExts = data.fileName.split(".");
        return (
          <ul key={data.fileId}>
            <li className="form">
              <img
                className="ext_img"
                src={`${import.meta.env.VITE_APP_URL}/web/maxage1/common/img/v4/${fileExts[fileExts.length - 1]}.svg`}
                alt="ext"
              />
            </li>
            <li className="name">
              <div className="tit">{data.fileName}</div>
            </li>
            <li className="modify">{convertUnixDate(data.lastModified)}</li>
            <li className="size">{getSize(data.size)}</li>
          </ul>
        );
      })}
    </List>
  );
};

export default FileList;

const List = styled.div`
  width: 100%;
  box-sizing: unset;
  height: calc(100vh - 255px); //헤더, 페이지네이션 값, 폴더정보, 테이블 헤더 높이 제외
  overflow-y: scroll;
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
      float: left;
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
