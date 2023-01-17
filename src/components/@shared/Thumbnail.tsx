import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import {
  RGBA_ARRAY_SIZE,
  START_X,
  START_Y,
  THUMBNAIL_HEIGHT,
  THUMBNAIL_WIDTH,
  TRIANGLE_COUNT,
} from "../../constants";
import { getCoordinate } from "../../utils/utils";
import Triangle from "./Triangle";

const Thumbnail = ({ src }: ThumbnailProps) => {
  const triangleArray = Array.from({ length: TRIANGLE_COUNT }, () => 0);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const [rgba, setRgba] = useState<Uint8ClampedArray[] | null>(null);

  useEffect(() => {
    if (canvasRef.current && imageRef.current) {
      const canvas = canvasRef.current.getContext("2d", { willReadFrequently: true });
      canvas?.drawImage(imageRef.current, START_X, START_Y, THUMBNAIL_WIDTH, THUMBNAIL_HEIGHT);

      if (canvas?.getImageData(START_X, START_Y, THUMBNAIL_WIDTH, THUMBNAIL_HEIGHT)) {
        const rgbaArray = [];
        const rgbaData = canvas?.getImageData(
          START_X,
          START_Y,
          THUMBNAIL_WIDTH,
          THUMBNAIL_HEIGHT
        ).data;

        for (let i = 0; i < rgbaData.length; i += RGBA_ARRAY_SIZE) {
          rgbaArray.push(rgbaData.slice(i, i + RGBA_ARRAY_SIZE));
        }
        setRgba(rgbaArray);
      }
    }
  }, [imageRef.current]);

  return (
    <S.Container>
      <S.Canvas ref={canvasRef} width={THUMBNAIL_WIDTH} height={THUMBNAIL_HEIGHT}></S.Canvas>
      <S.Image src={src} ref={imageRef} />
      {rgba &&
        triangleArray.map((el, index) => {
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

interface ThumbnailProps {
  src: string;
}

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

export default Thumbnail;
