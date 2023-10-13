import styled from "styled-components";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <Wrapper>
      <img className="logo_img" src={`${import.meta.env.VITE_APP_STATIC}/common/logo/logo_pc.svg`} alt="logo" />
      <SearchBar />
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.header`
  height: 88px;
  width: 100%;
  padding: 24px 0 24px 30px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  & .logo_img {
    width: 182px;
    margin-right: 3rem;
  }
`;
