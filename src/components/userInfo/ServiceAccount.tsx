import styled from "styled-components";

const ServiceAccount = () => {
  return (
    <Wrapper className="service_account">
      <img
        src={`${import.meta.env.VITE_APP_URL}/web/maxage1/common/img/cloud/bg_service_account.png`}
        alt="speech_container"
      />
      <ul>
        <li>계정 설정</li>
        <li id="account_info_upgrade">
          <a href="/ko/personal/office?upgrade=1">업그레이드</a>
        </li>
        <li>
          <a href="/ko/download">다운로드</a>
        </li>
        <li>연락처</li>
        <li>할인 쿠폰 / 이용권</li>
      </ul>
      <div className="b_box">
        <a href="javascript:logout()">로그아웃</a>
      </div>
    </Wrapper>
  );
};

export default ServiceAccount;

const Wrapper = styled.div`
  position: absolute;
  top: 24px;
  left: 95%;
  width: 218px;
  margin-bottom: 10px;

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

      font-size: 13px;
      line-height: 28px !important;
      height: auto !important;
      color: #2f3133 !important;
      border: 0 !important;
      white-space: nowrap;
      word-break: break-all;
    }
  }
`;
