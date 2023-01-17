import styled from "styled-components";
import useRandomTriangle from "../../hooks/useRandomTriangle";
import { Coordinate } from "../../types";

const ThumbnailPoint = ({ index, currentPixel, backgroundColor }: ThumbnailPointProps) => {
  const { width, height, rotatePercent, coordinate } = useRandomTriangle(index);

  // console.log("pixel, background: ", currentPixel, backgroundColor);

  return (
    <S.Point
      width={width}
      height={height}
      rotatePercent={rotatePercent}
      coordinate={coordinate}
      backgroundColor={backgroundColor}
    />
  );
};

interface ThumbnailPointProps {
  index: number;
  backgroundColor: Array<number>;
  currentPixel: number;
}
interface ThumbnailPointStyleProps {
  width: number;
  height: number;
  rotatePercent: number;
  coordinate: Coordinate;
  backgroundColor: Array<number>;
}

const S = {
  Point: styled.div<ThumbnailPointStyleProps>`
    position: absolute;
    top: ${(props) => props.coordinate.y}px;
    left: ${(props) => props.coordinate.x}px;

    width: 0;
    height: 0;
    border: ${(props) => props.width}px solid transparent;
    border-top: 0;
    border-bottom: ${(props) => props.height}px solid
      rgba(${(props) => props.backgroundColor.toString()});

    transform: rotate(${(props) => props.rotatePercent}turn);
  `,
};

export default ThumbnailPoint;
