import { css } from "styled-components";

export const animation = {
  closeUp: css`
    @keyframes closeUp {
      from {
        width: 240px;
        height: 135px;
      }
      to {
        width: 480px;
        height: 270px;
      }
    }
  `,
};
