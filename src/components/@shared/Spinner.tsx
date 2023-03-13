import styled from "styled-components";

export const Spinner = () => {
  return <S.Spinner />;
};

const S = {
  Spinner: styled.div`
    box-sizing: border-box;
    width: 44px;
    height: 44px;
    margin-bottom: 20px;
    border: 8px solid ${(props) => props.theme.GRAY_500};
    border-top: 8px solid ${(props) => props.theme.GRAY_300};
    border-radius: 50px;

    animation: spinner 1.5s linear infinite;
    @keyframes spinner {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  `,
};
