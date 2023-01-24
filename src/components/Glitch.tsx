import styled from "styled-components";
import { THUMBNAIL_HEIGHT, THUMBNAIL_WIDTH } from "../constants";
import { useGetImageRgba } from "../hooks/useGetImageRgba";
import { useMakeRandomRectangle } from "../hooks/useMakeRandomRectangle";
import { ThumbnailProps } from "../types";
import { Rectangle } from "./@shared/Rectangle";

export const Glitch = ({ src }: ThumbnailProps) => {
  const { componentArray, canvasRef, imageRef, rgba } = useGetImageRgba();
  const { width, height, coordinate } = useMakeRandomRectangle();

  console.log("?");

  return (
    <S.Container>
      <S.Canvas ref={canvasRef} width={THUMBNAIL_WIDTH} height={THUMBNAIL_HEIGHT}></S.Canvas>
      <S.Image src={src} ref={imageRef} />
      {rgba &&
        componentArray.map((el, index) => {
          const currentPixel = Math.floor(coordinate.x + coordinate.y * THUMBNAIL_WIDTH);

          return (
            <Rectangle
              key={index}
              width={width}
              height={height}
              coordinate={coordinate}
              backgroundColor={[
                rgba[currentPixel][0],
                rgba[currentPixel][1],
                rgba[currentPixel][2],
                rgba[currentPixel][3],
              ]}
            />
          );
        })}
    </S.Container>
  );
};

const S = {
  Container: styled.div`
    position: relative;
    overflow: hidden;
    width: 1600px;
    height: 900px;
  `,

  Canvas: styled.canvas`
    width: inherit;
    height: inherit;
  `,

  Image: styled.img`
    width: inherit;
    height: inherit;
  `,
};
