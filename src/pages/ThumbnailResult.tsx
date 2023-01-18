import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { Thumbnail } from "../components/@shared/Thumbnail";

export const ThumbnailResult = () => {
  const location = useLocation();
  const imageUrl = location.state;

  return <S.Container>{imageUrl && <Thumbnail src={imageUrl} />}</S.Container>;
};

const S = {
  Container: styled.div``,
};
