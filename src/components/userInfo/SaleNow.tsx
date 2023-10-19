import styled from "@emotion/styled";
const SaleNow = () => {
  //toDo: API 연결 시 sale 이미지 포함
  const onClick = () => {
    location.href = "ko/personal/office?upgrade=1";
  };
  return (
    <Wrapper className="upgrade_banner">
      <button onClick={onClick}>
        <img src={`${import.meta.env.VITE_APP_URL}/web/maxage1/common/img/cloud/ic_crown_small.svg`} alt="crown" />
        <span>Pro 알아보기</span>
      </button>
    </Wrapper>
  );
};

export default SaleNow;

const Wrapper = styled.div`
  position: relative;
  margin-bottom: 14px;
  background: #0029ad;

  & button {
    padding: 13px 24px 13px 30px;
    display: flex;
    align-items: center;

    color: #fff;
    & img {
      width: 24px;
      height: 24px;
    }

    & span {
      display: block;
      padding: 0 20px 0 9px;
      font-size: 13px;
      color: #fff;
      font-family: "Noto Sans KR", "MalgumGothic", "Helvetica Neue", system-ui, -apple-system, Helvetica, Arial,
        sans-serif;
    }
  }
  &::after {
    position: absolute;
    top: 50%;
    right: 10px;
    margin-top: -5px;
    border-top: 5px solid rgba(0, 0, 0, 0);
    border-bottom: 5px solid rgba(0, 0, 0, 0);
    border-left: 5px solid #fff;
    content: "";
    content: "";
  }
`;
