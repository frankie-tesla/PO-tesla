import styled from "@emotion/styled";
import Skeleton from "../Skeleton";
type Props = {
  level: 4 | 8 | 9 | 12 | 13 | undefined;
  isLoading: boolean;
};
const userLevel = {
  4: { title: "Business", color: "#102362" },
  8: { title: "Smart", color: "#1D7FF9" }, // 8- Smart 사용자
  9: { title: "Pro", color: "#0029AD" }, // 9- Pro 사용자
  12: { title: "AI", color: "#6f3ad0" }, // 12 - AI Basic 사용자
  13: { title: "AI-Plus", color: "#6f3ad0" } // 13 - AI PLUS 사용자
};
const LevelStatus = ({ level, isLoading }: Props) => {
  if (isLoading) {
    return (
      <div style={{ marginBottom: "5px" }}>
        <Skeleton height={30} width={260} />
      </div>
    );
  }
  const icon = level === 4 ? "ic_business_small" : "ic_crown_small";
  return (
    <Wrapper level={level ?? 4}>
      <img
        src={`${import.meta.env.VITE_APP_URL}/web/maxage1/common/img/cloud/${icon}.svg`}
        className={icon}
        alt="crown"
      />
      <strong>{userLevel[level ?? 4].title} 서비스 이용 중</strong>
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
    margin-left: 18px;
  }
  & .ic_business_small {
    width: 20px;
    height: 12px;
    margin-left: 21px;
  }

  & strong {
    font-size: 0.8125rem;
    font-weight: bold;
    font-family: "Noto Sans KR", sans-serif;
    margin-left: 20px;
  }
`;
