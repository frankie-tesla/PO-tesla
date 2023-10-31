import styled from "@emotion/styled";
import { VITE_APP_URL } from "../../__mocks__/constants";

const ServiceAccount = () => {
  const image = `${VITE_APP_URL}/web/maxage1/common/img/cloud/bg_service_account.png`;

  const onClick = (url: string) => {
    location.href = url;
  };
  return (
    <Wrapper image={image} className="service_account">
      <ul>
        <li onClick={() => onClick("/view/setting")}>계정 설정</li>
        <li onClick={() => onClick("/ko/personal/office?upgrade=1")}>업그레이드</li>
        <li onClick={() => onClick("/ko/download")}>다운로드</li>
        <li onClick={() => onClick("/ko/coupon")}>할인 쿠폰 / 이용권</li>
      </ul>
      <div className="b_box">
        <span>로그아웃</span>
      </div>
    </Wrapper>
  );
};

export default ServiceAccount;

const Wrapper = styled.div<{ image: string }>`
  position: absolute;
  top: 24px;
  left: 95%;
  width: 218px;
  margin-bottom: 10px;
  z-index: 1;
  background: url(${({ image }) => image}) no-repeat 0 0;

  & .b_box {
    margin: 0 6px 0 14px;
    padding: 9px 0 10px 0;
    text-align: center;
    border-top: 1px solid #d2d2d2;
    & span {
      padding: 0 32px;
      height: 26px;
      line-height: 26px;
      text-align: center;
      border-radius: 2px;
      border: 1px solid #c8c8c8;
      color: #2f3133 !important;
      cursor: pointer;
    }
  }
  & ul {
    padding: 17px 6px 17px 10px;
    list-style: none;

    & li {
      padding: 0 24px;
      gap: 0 10px;
      align-items: flex-start;
      flex-direction: column;
      position: relative;
      white-space: nowrap;
      cursor: pointer;
      font-size: 13px;
      line-height: 28px !important;
      height: auto !important;
      color: #2f3133 !important;
      border: 0 !important;
      white-space: nowrap;
      word-break: break-all;
    }
  }

  &::after {
    position: absolute;
    left: 0;
    bottom: -10px;
    width: 218px;
    height: 10px;
    background: url(${({ image }) => image}) no-repeat 0 100%;
    content: "";
  }
`;
