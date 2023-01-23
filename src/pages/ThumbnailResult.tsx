import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { Glitch } from "../components/Glitch";

export const ThumbnailResult = () => {
  const location = useLocation();
  const imageUrl = location.state;

  return (
    <S.Container>
      {/* {imageUrl && <Pointillism src={imageUrl} />} */}
      {imageUrl && <Glitch src={imageUrl} />}
    </S.Container>
  );
};

const S = {
  Container: styled.div``,
};
