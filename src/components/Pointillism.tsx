import styled from "styled-components";
import jobs from "../assets/Steve-Jobs.jpeg";
import { THUMBNAIL_HEIGHT, THUMBNAIL_WIDTH } from "../constants/triangle";
import { useGetImageRgba } from "../hooks/useGetImageRgba";
import { getCoordinate } from "../utils/utils";
import { Triangle } from "./@shared/Triangle";

export const Pointillism = () => {
  const { componentArray, canvasRef, imageRef, rgba } = useGetImageRgba();

  return (
    <S.Container>
      <S.Canvas ref={canvasRef} width={THUMBNAIL_WIDTH} height={THUMBNAIL_HEIGHT}></S.Canvas>
      <S.Image src={jobs} ref={imageRef} />
      {rgba &&
        componentArray.map((el, index) => {
          const coordinate = getCoordinate(index);
          const currentPixel = Math.floor(coordinate.x + coordinate.y * THUMBNAIL_WIDTH);
          return (
            <Triangle
              key={index}
              index={index}
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
    overflow: hidden;
    position: relative;
    width: 1600px;
    height: 900px;
  `,

  Canvas: styled.canvas`
    width: inherit;
    height: inherit;
    filter: blur(5px);
  `,

  Image: styled.img`
    width: inherit;
    height: inherit;
  `,
};
