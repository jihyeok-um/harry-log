import styled from "styled-components";
import { TRIANGLE_WIDTH } from "../../constants";
import { useRandomTriangle } from "../../hooks/useRandomTriangle";
import { Coordinate } from "../../types";

export const Triangle = ({ index, backgroundColor }: TriangleProps) => {
  const { height, rotatePercent, coordinate } = useRandomTriangle(index);

  return (
    <S.Triangle
      height={height}
      rotatePercent={rotatePercent}
      backgroundColor={backgroundColor}
      coordinate={coordinate}
    />
  );
};

interface TriangleProps {
  index: number;
  backgroundColor: Array<number>;
}

interface TriangleAttrProps {
  height: number;
  rotatePercent: number | string;
  coordinate: Coordinate;
  backgroundColor: Array<number> | string;
}

const S = {
  Triangle: styled.div<TriangleAttrProps>`
    position: absolute;
    top: ${(props) => props.coordinate.y}px;
    left: ${(props) => props.coordinate.x}px;

    width: 0;
    height: 0;
    border: ${TRIANGLE_WIDTH}px solid transparent;
    border-top: 0;
    border-bottom: ${(props) => props.height}px solid
      rgba(${(props) => props.backgroundColor.toString()});

    transform: rotate(${(props) => props.rotatePercent}turn);
  `,
};
