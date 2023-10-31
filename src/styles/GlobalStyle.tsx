import { css } from "@emotion/react";

const GlobalStyle = css`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    font-family: "Noto Sans KR", "MalgumGothic", "Helvetica Neue", system-ui, -apple-system, Helvetica, Arial,
      sans-serif;
    letter-spacing: -0.3px;

    & button {
      border: none;
      outline: none;
      background-color: inherit;
      cursor: pointer;
    }
  }
`;

export default GlobalStyle;
