import styled from "styled-components";
import UserInfoWrapper from "./userInfo/UserInfoWrapper";
import { NavLink } from "react-router-dom";
import ShareIcon from "../assets/ShareIcon";
import Importatnt from "../assets/Importatnt";
import LogoIcon from "../assets/LogoIcon";
import { useDocumentLocationTypeContext } from "../context/DocumentLocationTypeContext";
const SideBar = () => {
  const {
    actions: { setType }
  } = useDocumentLocationTypeContext();

  const onClick = (type: string) => {
    setType(type);
  };
  return (
    <Wrapper>
      <UserInfoWrapper />
      <nav>
        <NavLink to="/" onClick={() => onClick("My Polaris Drive")}>
          {({ isActive }) => (
            <>
              <LogoIcon isActive={isActive} />
              My Polaris Drive
            </>
          )}
        </NavLink>
        <NavLink to="share" onClick={() => onClick("공유 문서")}>
          {({ isActive }) => (
            <>
              <ShareIcon color={isActive ? "#1e82ff" : "#6e6e6e"} />
              공유 문서
            </>
          )}
        </NavLink>
        <NavLink to="favorite" onClick={() => onClick("중요 문서")}>
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
  position: relative;
  nav {
    border-top: 1px solid #ebebeb;
    padding: 18px 20px 0 10px;
    display: flex;
    gap: 18px;
    flex-direction: column;
    & a {
      padding-left: 12px;
      text-decoration: none;
      font-size: 13px;
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
