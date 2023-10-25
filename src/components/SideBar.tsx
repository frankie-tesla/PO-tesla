import styled from "@emotion/styled";
import UserInfoWrapper from "./userInfo/UserInfoWrapper";
import { Link } from "react-router-dom";
import ShareIcon from "../assets/ShareIcon";
import Importatnt from "../assets/Importatnt";
import LogoIcon from "../assets/LogoIcon";
import { useDocumentLocationTypeContext } from "../context/DocumentLocationTypeContext";
import { useSearchStateContext } from "../context/SearchStateContext";

const SideBar = () => {
  const {
    type,
    actions: { setType }
  } = useDocumentLocationTypeContext();
  const { setKeyword } = useSearchStateContext();
  const onClick = (type: string) => {
    setType(type);
    setKeyword("");
  };

  return (
    <Wrapper>
      <UserInfoWrapper />
      <nav>
        <Link
          to="/ko/carMode"
          className={type === "My Polaris Drive" ? "active" : ""}
          onClick={() => onClick("My Polaris Drive")}>
          <LogoIcon isActive={type === "My Polaris Drive"} />
          My Polaris Drive
        </Link>
        <Link
          to="/ko/carMode/share"
          className={type === "공유 문서" ? "active" : ""}
          onClick={() => onClick("공유 문서")}>
          <ShareIcon color={type === "공유 문서" ? "#1e82ff" : "#6e6e6e"} />
          공유 문서
        </Link>
        <Link
          to="/ko/carMode/favorite"
          className={type === "중요 문서" ? "active" : ""}
          onClick={() => onClick("중요 문서")}>
          <Importatnt color={type === "중요 문서" ? "#1e82ff" : "#6e6e6e"} />
          중요 문서
        </Link>
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
