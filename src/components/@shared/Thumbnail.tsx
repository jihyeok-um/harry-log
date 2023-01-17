import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { getCoordinate } from "../../utils/utils";
import ThumbnailPoint from "./ThumbnailPoint";

const Thumbnail = ({ src }: ThumbnailProps) => {
  const triangleArray = Array.from({ length: 1500 }, () => 0);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const [rgba, setRgba] = useState<Uint8ClampedArray[] | null>(null);

  useEffect(() => {
    if (canvasRef.current && imageRef.current) {
      const canvas = canvasRef.current.getContext("2d");
      canvas?.drawImage(imageRef.current, 0, 0, 1600, 900);

      if (canvas?.getImageData(0, 0, 1600, 900)) {
        const rgbaData = canvas?.getImageData(0, 0, 1600, 900).data;
        const rgbaArray = [];
        const arraySize = 4;

        for (let i = 0; i < rgbaData.length; i += arraySize) {
          rgbaArray.push(rgbaData.slice(i, i + arraySize));
        }

        setRgba(rgbaArray);
      }
    }
  }, [imageRef.current]);

  return (
    <S.Container>
      <S.Canvas ref={canvasRef} width={1600} height={900}></S.Canvas>
      <S.Image src={src} ref={imageRef} />
      {rgba &&
        triangleArray.map((el, index) => {
          const coordinate = getCoordinate(index);
          let currentPixel = Math.floor(coordinate.x + coordinate.y * 1600);
          currentPixel >= 1600 * 900 ? 1600 * 900 - 1 : currentPixel;

          console.log("coordinate: ", coordinate);
          console.log("currentPixel: ", currentPixel);

          return (
            <ThumbnailPoint
              key={index}
              index={index}
              currentPixel={currentPixel}
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
