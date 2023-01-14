import styled from "styled-components";

const Thumbnail = ({ src }: ThumbnailProps) => {
  return <S.Image src={src} />;
};

interface ThumbnailProps {
  src: string;
}

const S = {
  Image: styled.img`
    width: 1600px;
    height: 900px;
  `,
};

export default Thumbnail;
