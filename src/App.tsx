import Header from "./components/Header";
import SideBar from "./components/SideBar";
import styled from "@emotion/styled";
import { Global } from "@emotion/react";
import GlobalStyle from "./styles/GlobalStyle";
import { Outlet } from "react-router-dom";
import { DocumentLocationTypeContextProvider } from "./context/DocumentLocationTypeContext";
import { SearchStateContextProvider } from "./context/SearchStateContext";
function App() {
  return (
    <>
      <Global styles={GlobalStyle} />
      <SearchStateContextProvider>
        <Header />
        <DocumentLocationTypeContextProvider>
          <Main>
            <SideBar />
            <Outlet />
          </Main>
        </DocumentLocationTypeContextProvider>
      </SearchStateContextProvider>
    </>
  );
}

export default App;

const Main = styled.main`
  display: flex;
  height: calc(100vh - 88px);
`;
