import { useContext, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { Carousel } from "../components/carousel/Carousel";
import { MAX_NOISE_LEVEL, MIN_NOISE_LEVEL, ROTATE_DEGREE } from "../constants/pointillism";
import { ROUTE_PATH } from "../constants/route";
import { Styles } from "../styles/Styles";
import leftArrow from "../assets/icons/leftArrow.png";
import rightArrow from "../assets/icons/rightArrow.png";
import { RgbaContext } from "../context/RgbaContext";

export const ThumbnailOptions = () => {
  const [searchParams] = useSearchParams();
  const [noiseStrength, setNoiseStrength] = useState(1);
  const [carouselContainerRotateY, setCarouselContainerRotateY] = useState(0);
  const rgba = useContext(RgbaContext);
  const navigate = useNavigate();
  const thumbnailSource = String(searchParams.get("thumbnail-source"));

  const handleClickButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate(`${ROUTE_PATH.THUMBNAIL_RESULT}?noise-strength=${noiseStrength}`, {
      state: { thumbnailSource },
    });
  };

  useEffect(() => {
    if (!rgba) {
      alert("이미지 정보가 사라졌습니다. 다시 시도해주세요.");
      navigate(ROUTE_PATH.HOME);
    }
  }, [rgba]);

  return (
    <S.Container>
      <Carousel
        thumbnailSource={thumbnailSource}
        carouselContainerRotateY={carouselContainerRotateY}
      />
      <S.ButtonContainer>
        <S.LeftButton
          onClick={() => {
            setCarouselContainerRotateY(carouselContainerRotateY + ROTATE_DEGREE);
            setNoiseStrength((prev) => (prev === MIN_NOISE_LEVEL ? MAX_NOISE_LEVEL : prev - 1));
          }}
        >
          <img src={leftArrow} alt="좌측 화살표 버튼" width={30} height={30} />
        </S.LeftButton>
        <S.Button onClick={handleClickButton}>노이즈 강도 선택</S.Button>
        <S.RightButton
          onClick={() => {
            setCarouselContainerRotateY(carouselContainerRotateY - ROTATE_DEGREE);
            setNoiseStrength((prev) => (prev === MAX_NOISE_LEVEL ? MIN_NOISE_LEVEL : prev + 1));
          }}
        >
          <img src={rightArrow} alt="우측 화살표 버튼" width={30} height={30} />
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
    background-color: ${(props) => props.theme.BACKGROUND};
  `,

  ButtonContainer: styled.div`
    position: absolute;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    bottom: 50px;
    gap: 10px;
  `,

  LeftButton: styled.button`
    width: 44px;
    height: 44px;
    background-color: ${(props) => props.theme.GRAY_700};
    border-radius: 10px;
    padding: 10px;
    color: ${(props) => props.theme.WHITE};
  `,

  Button: styled.button`
    height: 44px;
    background-color: ${(props) => props.theme.GRAY_700};
    border-radius: 10px;
    padding: 10px;
    color: ${(props) => props.theme.WHITE};
  `,

  RightButton: styled.button`
    width: 44px;
    height: 44px;
    background-color: ${(props) => props.theme.GRAY_700};
    border-radius: 10px;
    padding: 10px;
    color: ${(props) => props.theme.WHITE};
  `,
};
