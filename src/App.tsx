import Header from "./components/Header";
import SideBar from "./components/SideBar";
import styled from "@emotion/styled";
import GlobalStyle from "./styles/GlobalStyle";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Main>
        <SideBar />
        <Outlet />
      </Main>
    </>
  );
}

export default App;

const Main = styled.main`
  display: flex;
  height: calc(100vh - 88px);
`;
