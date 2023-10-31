import styled from "@emotion/styled";
import { BaseRequest } from "../../apis/type";
import { VITE_APP_URL } from "../../__mocks__/constants";
type Props = {
  setDriveRequestData: (data: BaseRequest) => void;
  driveRequestData: BaseRequest;
};

const ListSubject = ({ setDriveRequestData, driveRequestData }: Props) => {
  const { sort, desc } = driveRequestData;
  const handleClick = (item: "TIME" | "NAME") => {
    if (sort === item) {
      setDriveRequestData({
        ...driveRequestData,
        desc: !desc
      });
    } else {
      setDriveRequestData({
        ...driveRequestData,
        desc: false,
        sort: item
      });
    }
  };

  const isItemSelected = (item: string) => sort === item;

  const sortOrderClassName = desc ? "down" : "up";
  const arrowImg = `${VITE_APP_URL}/web/maxage1/common/img/cloud/arrow_${sortOrderClassName}.svg`;
  return (
    <UlStyle className="tb_header">
      <li className="form pointer" onClick={() => handleClick("TIME")}>
        <a href="#">
          형식
          <img src={arrowImg} className={`${isItemSelected("TIME") ? sortOrderClassName : ""}`} />
        </a>
      </li>
      <li className="name pointer" onClick={() => handleClick("NAME")}>
        <a href="#">
          이름
          <img src={arrowImg} className={`${isItemSelected("NAME") ? sortOrderClassName : ""}`} />
        </a>
      </li>
      <li className="modify pointer" onClick={() => handleClick("TIME")}>
        <a href="#">
          최종 수정한 날짜
          <img src={arrowImg} className={`${isItemSelected("TIME") ? sortOrderClassName : ""}`} />
        </a>
      </li>
      <li className="size">크기</li>
    </UlStyle>
  );
};

export default ListSubject;

export const UlStyle = styled.ul`
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
`;
