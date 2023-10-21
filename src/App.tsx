import Header from "./components/Header";
import SideBar from "./components/SideBar";
import styled from "@emotion/styled";
import GlobalStyle from "./styles/GlobalStyle";
import { Outlet } from "react-router-dom";
import { DocumentLocationTypeContextProvider } from "./context/DocumentLocationTypeContext";
import { DataListsContextProvider } from "./context/DataListsContext";
import { SearchStateContextProvider } from "./context/SearchStateContext";
function App() {
  return (
    <>
      <GlobalStyle />

      <SearchStateContextProvider>
        <Header />
        <DocumentLocationTypeContextProvider>
          <Main>
            <SideBar />
            <DataListsContextProvider>
              <Outlet />
            </DataListsContextProvider>
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
