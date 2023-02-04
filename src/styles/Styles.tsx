import { css } from "styled-components";

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
