import styled, { css } from "styled-components";
import { Coordinate } from "../../types";

export const Polaroid = ({ ...props }: PolaroidProps) => {
  return <S.Container {...props} />;
};

interface PolaroidProps {
  src: string;
  alt: string;
  randomCoord?: Coordinate;
  randomRotate?: number;
}

const S = {
  Container: styled.img<PolaroidProps>`
    width: 225px;
    height: 300px;
    box-shadow: 1px 1px 1px 1px ${(props) => props.theme.GRAY_800};
    transform: rotate(${(props) => props.randomRotate}deg);

    @media (max-width: 600px) {
      width: 150px;
      height: 200px;
    }

    ${(props) =>
      props.randomCoord && props.randomRotate
        ? css`
            position: absolute;
            top: ${props.randomCoord.y}px;
            left: ${props.randomCoord.x}px;
          `
        : css``}
  `,
};
