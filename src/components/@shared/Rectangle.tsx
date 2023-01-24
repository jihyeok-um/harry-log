import styled from "styled-components";
import { Coordinate } from "../../types";

export const Rectangle = ({ width, height, coordinate, backgroundColor }: RectangleProps) => {
  return (
    <S.Rectangle
      width={width}
      height={height}
      coordinate={coordinate}
      backgroundColor={backgroundColor}
    />
  );
};

interface RectangleProps {
  width: number;
  height: number;
  coordinate: Coordinate;
  backgroundColor: Array<number> | string;
}

const S = {
  Rectangle: styled.div<RectangleProps>`
    position: absolute;
    top: ${(props) => props.coordinate.y}px;
    left: ${(props) => props.coordinate.x}px;

    width: ${(props) => props.width}px;
    height: ${(props) => props.height}px;
    background-color: ${(props) => props.backgroundColor};
  `,
};
