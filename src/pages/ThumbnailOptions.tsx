import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { Carousel } from "../components/Carousel";
import { ROUTE_PATH } from "../constants/route";
import { Styles } from "../styles/Styles";

export const ThumbnailOptions = () => {
  const [searchParams] = useSearchParams();
  const [noiseStrength, setNoiseStrength] = useState(1);
  const [focusIndex, setFocusIndex] = useState(0);
  const navigate = useNavigate();
  const thumbnailSource = String(searchParams.get("thumbnail-source"));

  const handleClickButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate(`${ROUTE_PATH.THUMBNAIL_RESULT}?noise-strength=${noiseStrength}`, {
      state: { thumbnailSource },
    });
  };

  return (
    <S.Container>
      <Carousel thumbnailSource={thumbnailSource} focusIndex={focusIndex} />
      <S.ButtonContainer>
        <S.LeftButton
          onClick={() => {
            setFocusIndex(focusIndex + 60);
            setNoiseStrength((prev) => (prev === 1 ? 6 : prev - 1));
          }}
        >
          {"<"}
        </S.LeftButton>
        <S.Button onClick={handleClickButton}>선택 완료</S.Button>
        <S.RightButton
          onClick={() => {
            setFocusIndex(focusIndex - 60);
            setNoiseStrength((prev) => (prev === 6 ? 1 : prev + 1));
          }}
        >
          {">"}
        </S.RightButton>
      </S.ButtonContainer>
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

  ButtonContainer: styled.div`
    position: absolute;
    bottom: 100px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10px;
  `,

  LeftButton: styled.button`
    background-color: ${(props) => props.theme.GRAY_500};
    border-radius: 10px;
    padding: 10px;
    color: ${(props) => props.theme.WHITE};
  `,

  Button: styled.button`
    background-color: ${(props) => props.theme.GRAY_500};
    border-radius: 10px;
    padding: 10px;
    color: ${(props) => props.theme.WHITE};
  `,

  RightButton: styled.button`
    background-color: ${(props) => props.theme.GRAY_500};
    border-radius: 10px;
    padding: 10px;
    color: ${(props) => props.theme.WHITE};
  `,
};
