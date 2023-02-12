import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { Carousel } from "../components/Carousel";
import { ROUTE_PATH } from "../constants/route";
import { usePointillism } from "../hooks/usePointillism";
import { Styles } from "../styles/Styles";

export const ThumbnailOptions = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [noiseStrength, setNoiseStrength] = useState(1);
  const thumbnailSource = String(searchParams.get("thumbnail-source"));

  const handleClickButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate(`${ROUTE_PATH.THUMBNAIL_RESULT}?noise-strength=${noiseStrength}`, {
      state: { thumbnailSource },
    });
  };

  return (
    <S.Container>
      <Carousel thumbnailSource={thumbnailSource} />
      <S.Button onClick={handleClickButton}>결과 페이지로 이동</S.Button>
    </S.Container>
  );
};

const S = {
  Container: styled.div`
    ${Styles.FlexCenter}
    ${Styles.FullWidthAndHeight}
    flex-direction: column;
    gap: 20px;
    perspective: 3000px;
  `,

  Carousel: styled.div`
    ${Styles.FlexCenter}
    position: relative;
    flex-direction: row;
    gap: 20px;
    transform-style: preserve-3d;
    transform: rotateY(0deg);
  `,

  CarouselItem: styled.canvas<{ rotateYPercent: number }>`
    position: absolute;
    text-align: center;
    width: 600px;
    height: 600px;
    background-color: ${(props) => props.theme.GRAY_700};
    color: ${(props) => props.theme.WHITE};
    transform: rotateY(${(props) => props.rotateYPercent}deg) translateZ(550px);
    font-size: 24px;

    @media (max-width: 1000px) {
      width: 300px;
      height: 300px;
      transform: rotateY(${(props) => props.rotateYPercent}deg) translateZ(250px);
    }
  `,

  ItemImage: styled.img`
    object-fit: cover;
    width: 100%;
    height: 100%;
  `,

  Button: styled.button`
    position: absolute;
    bottom: 100px;
    background-color: ${(props) => props.theme.GRAY_500};
    border-radius: 10px;
    padding: 10px;
    color: ${(props) => props.theme.WHITE};
  `,
};
