import styled from "styled-components";
import { THUMBNAIL_HEIGHT, THUMBNAIL_WIDTH } from "../constants/pointillism";

export const Pointillism = ({ canvasRef }: PointillismProps) => {
  return (
    <S.Container>
      <S.Canvas ref={canvasRef} width={THUMBNAIL_WIDTH} height={THUMBNAIL_HEIGHT}></S.Canvas>
    </S.Container>
  );
};

interface PointillismProps {
  canvasRef: React.RefObject<HTMLCanvasElement>;
}

const S = {
  Container: styled.div`
    position: relative;
    width: 1600px;
    height: 900px;

    @media (max-width: 1200px) {
      width: 100%;
      height: 100%;
    }
  `,

  Canvas: styled.canvas`
    width: inherit;
    height: inherit;
  `,
};
