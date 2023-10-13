import Header from "./components/Header";
import LevelStatus from "./components/LevelStatus";
import GlobalStyle from "./styles/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <LevelStatus level={9} />
    </>
  );
}

export default App;
