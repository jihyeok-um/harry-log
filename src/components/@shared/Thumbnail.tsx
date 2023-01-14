import styled from "styled-components";
import ThumbnailPoint from "./ThumbnailPoint";

const Thumbnail = ({ src }: ThumbnailProps) => {
  return (
    <S.Container>
      <S.Image src={src} />
      <ThumbnailPoint />
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

  Image: styled.img`
    width: inherit;
    height: inherit;
  `,
};

export default Thumbnail;
