import SaleNow from "./SaleNow";
import UserInfo from "./UserInfo";
import CreditInfo from "./CreditInfo";
import LevelStatus from "./LevelStatus";
import useUserInfoQuery from "../../hooks/useUserInfoQuery";
import styled from "@emotion/styled";

const UserInfoWrapper = () => {
  const { getUserInfo } = useUserInfoQuery();
  const { data, isLoading } = getUserInfo();

  return (
    <Wrapper>
      {data?.level === 1 ? <SaleNow /> : <LevelStatus isLoading={isLoading} level={data?.level} />}

      <UserInfo data={data} isLoading={isLoading} />
      <CreditInfo />
    </Wrapper>
  );
};

export default UserInfoWrapper;

const Wrapper = styled.dt`
  border-top: 1px solid #dcdcdc;
`;
