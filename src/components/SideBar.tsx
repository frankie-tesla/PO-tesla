import styled from "styled-components";
import UserInfoWrapper from "./userInfo/UserInfoWrapper";
const SideBar = () => {
  return (
    <Wrapper>
      <UserInfoWrapper />
      <ul>
        <li>My Polaris Drive</li>
        <li>공유 문서</li>
        <li>중요 문서</li>
      </ul>
    </Wrapper>
  );
};

export default SideBar;

const Wrapper = styled.aside`
  width: 260px;
  border-right: 1px solid #dcdcdc;

  ul {
    border-top: 1px solid #ebebeb;
    padding: 18px 20px 0 10px;

    & li {
      padding-left: 12px;
    }
  }
`;
