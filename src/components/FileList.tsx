import styled from "styled-components";
import { listData } from "../dummy/dummy.ts";
import { convertUnixDate } from "../utils/date.ts";
import { getSize } from "../utils/size.ts";
import { useState } from "react";
import PaginatedItems from "./PagenationTest.tsx";

const FileList = () => {
  const [selectedItem, setSelectedItem] = useState<string>("name");
  const [isDescending, setIsDescending] = useState<boolean>(false);

  const handleClick = (item: string) => {
    if (selectedItem === item) {
      setIsDescending(!isDescending);
    } else {
      setIsDescending(false);
      setSelectedItem(item);
    }
  };

  const isItemSelected = (item: string) => selectedItem === item;
  const sortOrderClassName = isDescending ? "down" : "up";
  const arrowImg = `${import.meta.env.VITE_APP_URL}/web/maxage1/common/img/cloud/arrow_${sortOrderClassName}.svg`;

  return (
    <Wrapper>
      <ul>
        <li className="form pointer" onClick={() => handleClick("form")}>
          <a href="#">
            형식
            <img src={arrowImg} className={`${isItemSelected("form") ? sortOrderClassName : ""}`} />
          </a>
        </li>
        <li className="name pointer" onClick={() => handleClick("name")}>
          <a href="#">
            이름
            <img src={arrowImg} className={`${isItemSelected("name") ? sortOrderClassName : ""}`} />
          </a>
        </li>
        <li className="modify pointer" onClick={() => handleClick("modify")}>
          <a href="#">
            최종 수정한 날짜
            <img src={arrowImg} className={`${isItemSelected("modify") ? sortOrderClassName : ""}`} />
          </a>
        </li>
        <li className="size">크기</li>
      </ul>
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
      <div className="paginationWrpp">
        <PaginatedItems itemsPerPage={4} />
      </div>
    </Wrapper>
  );
};

export default FileList;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  box-sizing: unset;

  & .logo_img {
    width: 182px;
    margin-right: 3rem;
  }

  ul {
    width: 100%;
    height: 49px;
    border-top: 1px solid #dcdcdc;
    border-bottom: 1px solid #ebebeb;
    position: relative;
    list-style: none;
    font-size: 13px;
    padding: 0;
    margin: 0;
    box-sizing: unset;

    li {
      position: absolute;
      display: inline-block;
      height: 49px;
      line-height: 49px;
      text-align: left;
      background: #fff;
      color: #787878;
      box-sizing: unset;

      a {
        display: flex;
        align-items: center;
        height: 49px;
        color: #787878;
        line-height: 14px;
        text-indent: 0;
        outline: none;
        text-decoration: none;

        img {
          display: none;
        }

        .down,
        .up {
          display: block;
          padding-left: 2px;
        }
      }

      &.pointer {
        cursor: pointer;
      }

      &.form {
        width: 50px;
        padding-left: 50px;

        .ext_img {
          position: relative;
          top: 9px;
        }
      }

      &.name {
        left: 93px;
        right: 0;
      }

      &.modify {
        width: 201px;
        right: 151px;
        border-left: 1px solid #ebebeb;
        border-right: 1px solid #ebebeb;

        a {
          padding: 0 23px;
        }
      }

      &.size {
        width: 151px;
        right: 0;
        text-indent: 23px;
      }
    }
  }
  & .paginationWrpp {
    width: 100%;
    display: flex;
    justify-content: center;
    & .pagenation {
      width: inherit;
      list-style: none;
      display: flex;
      gap: 0 24px;
      border: none;
      font-size: 14px;
      width: auto;
      & li {
        display: block;
        position: static;
      }
    }
  }
`;

const List = styled.div`
  width: 100%;
  box-sizing: unset;

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
