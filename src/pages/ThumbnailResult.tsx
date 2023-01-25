import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { Pointillism } from "../components/Pointillism";

export const ThumbnailResult = () => {
  const location = useLocation();
  const imageUrl = location.state;

  return (
    <S.Container>
      <Pointillism src={imageUrl} />
    </S.Container>
  );
};

const S = {
  Container: styled.div``,
};
