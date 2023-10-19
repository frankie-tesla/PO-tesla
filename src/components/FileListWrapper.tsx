import styled from "@emotion/styled";

import { useState } from "react";
import PaginatedItems from "./PagenationTest.tsx";
import FileList from "./FileList.tsx";

const FileListWrapper = () => {
  const [selectedItem, setSelectedItem] = useState("name");
  const [isDescending, setIsDescending] = useState(false);

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
      <ul className="tb_header">
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
      <FileList />
      <PaginatedItems itemsPerPage={4} />
    </Wrapper>
  );
};

export default FileListWrapper;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: unset;

  & .logo_img {
    width: 182px;
    margin-right: 3rem;
  }

  & .tb_header {
    border-top: 1px solid #dcdcdc;
  }

  ul {
    width: 100%;
    height: 49px;
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
`;
