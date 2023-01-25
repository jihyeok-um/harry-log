import styled from "styled-components";
import { THUMBNAIL_HEIGHT, THUMBNAIL_WIDTH } from "../constants/triangle";
import { useGetImageRgba } from "../hooks/useGetImageRgba";
import { ThumbnailProps } from "../types";

export const Pointillism = ({ src }: ThumbnailProps) => {
  const { canvasRef } = useGetImageRgba(src);

  return (
    <S.Container>
      <S.ThumbnailContainer>
        <S.Canvas ref={canvasRef} width={THUMBNAIL_WIDTH} height={THUMBNAIL_HEIGHT}></S.Canvas>
      </S.ThumbnailContainer>
    </S.Container>
  );
};

const S = {
  Container: styled.div`
    position: relative;
  `,

  DownloadButton: styled.a`
    border: 1px solid #666666;
    border-radius: 2px;
    margin-left: 5px;
    padding: 5px;
    margin-bottom: 20px;
  `,

  ThumbnailContainer: styled.div`
    overflow: hidden;
    position: relative;
    width: 1600px;
    height: 900px;
  `,

  Canvas: styled.canvas`
    width: inherit;
    height: inherit;
  `,
};
