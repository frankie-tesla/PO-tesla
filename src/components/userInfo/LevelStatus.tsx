import styled from "styled-components";
type Props = {
  level: 4 | 8 | 9 | 12 | 13;
};
const userLevel = {
  4: { title: "Business", color: "#102362" },
  8: { title: "Smart", color: "#1D7FF9" }, // 8- Smart 사용자
  9: { title: "Pro", color: "#0029AD" }, // 9- Pro 사용자
  12: { title: "AI", color: "#6f3ad0" }, // 12 - AI Basic 사용자
  13: { title: "AI-Plus", color: "#6f3ad0" } // 13 - AI PLUS 사용자
};
const LevelStatus = ({ level }: Props) => {
  return (
    <Wrapper level={level}>
      <img src={`${import.meta.env.VITE_APP_URL}/web/maxage1/common/img/cloud/ic_crown_small.svg`} alt="crown" />
      <strong>{userLevel[level].title} 서비스 이용 중</strong>
    </Wrapper>
  );
};

export default LevelStatus;

const Wrapper = styled.div<{
  level: 4 | 8 | 9 | 12 | 13;
}>`
  color: ${({ level }) => userLevel[level].color};
  height: 30px;
  display: flex;
  align-items: center;
  & img {
    width: 24px;
    height: 24px;
    margin-right: 26px;
  }

  & strong {
    font-size: 0.8125rem;
    font-weight: bold;
    font-family: "Noto Sans KR", sans-serif;
  }
`;
