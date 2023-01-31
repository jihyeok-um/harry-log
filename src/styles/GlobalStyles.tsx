import { createGlobalStyle, css } from "styled-components";
import reset from "styled-reset";

export const Styles = {
  ScrollBarNone: css`
    ::-webkit-scrollbar {
      display: none;
    }
    -ms-overflow-style: none;
    scrollbar-width: none;
  `,

  FlexCenter: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  FullWidthAndHeight: css`
    width: 100%;
    height: 100%;
  `,
};

const GlobalStyle = createGlobalStyle`
  ${reset};

  html {
    ${Styles.FullWidthAndHeight}
  }

  body {
    ${Styles.ScrollBarNone}
    ${Styles.FullWidthAndHeight}
  }

  #root {
    ${Styles.FullWidthAndHeight}
    overflow: hidden;
  }
  
  button {
    all: unset;
    cursor: pointer;

    :hover {
      filter: brightness(0.8);
    }
    :active {
      filter: brightness(0.7);
    }
  }
`;

export default GlobalStyle;
