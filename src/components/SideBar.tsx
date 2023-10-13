import styled from "styled-components";
import UserInfoWrapper from "./userInfo/UserInfoWrapper";
import { NavLink } from "react-router-dom";
import ShareIcon from "../assets/ShareIcon";
import Importatnt from "../assets/Importatnt";
import LogoIcon from "../assets/LogoIcon";
const SideBar = () => {
  return (
    <Wrapper>
      <UserInfoWrapper />
      <nav>
        <NavLink to="/">
          {({ isActive }) => (
            <>
              <LogoIcon isActive={isActive} />
              My Polaris Drive
            </>
          )}
        </NavLink>
        <NavLink to="share">
          {({ isActive }) => (
            <>
              <ShareIcon color={isActive ? "#1e82ff" : "#6e6e6e"} />
              공유 문서
            </>
          )}
        </NavLink>
        <NavLink to="favorite">
          {({ isActive }) => (
            <>
              <Importatnt color={isActive ? "#1e82ff" : "#6e6e6e"} />
              중요 문서
            </>
          )}
        </NavLink>
      </nav>
    </Wrapper>
  );
};

export default SideBar;

const Wrapper = styled.aside`
  width: 260px;
  border-right: 1px solid #dcdcdc;

  nav {
    border-top: 1px solid #ebebeb;
    padding: 18px 20px 0 10px;
    display: flex;
    gap: 18px;
    flex-direction: column;
    & a {
      padding-left: 12px;
      text-decoration: none;
      font-size: 18px;
      font-family: "Malgun Gothic", sans-serif;
      display: flex;

      align-items: center;
      color: #2f3133;
      & svg {
        margin-right: 11px;
      }
    }
    & .active {
      color: #1e82ff;
    }
  }
`;
