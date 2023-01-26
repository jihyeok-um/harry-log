import styled from "styled-components";
import { THUMBNAIL_HEIGHT, THUMBNAIL_WIDTH } from "../constants/triangle";
import { usePointillism } from "../hooks/usePointillism";
import { ThumbnailProps } from "../types";

export const Pointillism = ({ src }: ThumbnailProps) => {
  const { canvasRef } = usePointillism(src);

  return (
    <S.Container>
      <S.Canvas ref={canvasRef} width={THUMBNAIL_WIDTH} height={THUMBNAIL_HEIGHT}></S.Canvas>
    </S.Container>
  );
};

const S = {
  Container: styled.div`
    position: relative;
    width: 1600px;
    height: 900px;
  `,

  Canvas: styled.canvas`
    width: inherit;
    height: inherit;
  `,
};
