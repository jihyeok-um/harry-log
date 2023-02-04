import { useNavigate, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { ROUTE_PATH } from "../constants/route";
import { Styles } from "../styles/Styles";

export const ThumbnailOptions = () => {
  const [searchParams] = useSearchParams();
  const thumbnailSource = searchParams.get("thumbnail-source");
  const navigate = useNavigate();

  const handleClickButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate(`${ROUTE_PATH.THUMBNAIL_RESULT}?thumbnail-source=${thumbnailSource}`);
  };

  return (
    <S.Container>
      <S.Title>옵션 페이지</S.Title>
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

  Button: styled.button`
    background-color: ${(props) => props.theme.GRAY_500};
    border-radius: 10px;
    padding: 10px;
    color: ${(props) => props.theme.WHITE};
  `,
};
