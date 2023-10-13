import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing : border-box;
  }
  body {
    font-family: "Noto Sans KR","MalgumGothic","Helvetica Neue",system-ui,-apple-system,Helvetica,Arial,sans-serif;
    letter-spacing: -0.3px;
  }
`;

export default GlobalStyle;
