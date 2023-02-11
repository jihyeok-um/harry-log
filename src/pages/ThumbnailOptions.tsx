import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { ROUTE_PATH } from "../constants/route";
import { Styles } from "../styles/Styles";

export const ThumbnailOptions = () => {
  const [searchParams] = useSearchParams();
  const [noiseStrength, setNoiseStrength] = useState(1);
  const thumbnailSource = searchParams.get("thumbnail-source");
  const noiseStrengths = [1, 2, 3, 4, 5];
  const navigate = useNavigate();

  const handleClickButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate(`${ROUTE_PATH.THUMBNAIL_RESULT}?noise-strength=${noiseStrength}`, {
      state: { thumbnailSource },
    });
  };

  return (
    <S.Container>
      <S.Title>옵션 페이지</S.Title>
      <S.OptionsContainer>
        {noiseStrengths.map((el) => (
          <S.Option key={el} onClick={() => setNoiseStrength(el)}>
            {el}
          </S.Option>
        ))}
      </S.OptionsContainer>
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
  `,

  Title: styled.h1`
    font-size: 28px;
    font-weight: 700;
  `,

  OptionsContainer: styled.div`
    ${Styles.FlexCenter}
    flex-direction: row;
    gap: 20px;
  `,

  Option: styled.button`
    background-color: ${(props) => props.theme.GRAY_700};
    border-radius: 50%;
    padding: 10px;
    color: ${(props) => props.theme.WHITE};
  `,

  Button: styled.button`
    background-color: ${(props) => props.theme.GRAY_500};
    border-radius: 10px;
    padding: 10px;
    color: ${(props) => props.theme.WHITE};
  `,
};
