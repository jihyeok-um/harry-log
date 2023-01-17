import styled from "styled-components";
import { THUMBNAIL_HEIGHT, THUMBNAIL_WIDTH } from "../../constants";
import useDrawThumbnail from "../../hooks/useDrawThumbnail";
import { getCoordinate } from "../../utils/utils";
import Triangle from "./Triangle";

const Thumbnail = ({ src }: ThumbnailProps) => {
  const { triangleArray, canvasRef, imageRef, rgba } = useDrawThumbnail();

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
    filter: blur(5px);
  `,

  Image: styled.img`
    width: inherit;
    height: inherit;
  `,
};

export default Thumbnail;
