import styled from "styled-components";
import useRandomTriangle from "../../hooks/useRandomTriangle";

const ThumbnailPoint = () => {
  const { width, height, rotatePercent } = useRandomTriangle();

  return <S.Point width={width} height={height} rotatePercent={rotatePercent}></S.Point>;
};

interface ThumbnailPointProps {
  width: number;
  height: number;
  rotatePercent: number;
}

const S = {
  Point: styled.div<ThumbnailPointProps>`
    width: 0;
    height: 0;

    border: ${(props) => props.width}px solid transparent;
    border-top: 0;
    border-bottom: ${(props) => props.height}px solid red;
  `,
};

export default ThumbnailPoint;
